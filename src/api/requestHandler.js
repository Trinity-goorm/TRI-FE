import axios from 'axios';

let isRefreshing = false;
let failedQueue = [];
const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log(BASE_URL);

const refreshAccessToken = async () => {
    try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            throw new Error("Refresh token not found");
        }

        const response = await axios.post(`${BASE_URL}/api/v1/auth/token/refresh`, {
            refreshToken,
        });

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        // 새 토큰 저장
        await localStorage.setItem('accessToken', accessToken);
        await localStorage.setItem('refreshToken', newRefreshToken);

        console.log("Access token refreshed successfully");
        return accessToken;
    } catch (error) {
        console.error("Failed to refresh token:", error.message);
        throw error;
    }
};

const processQueue = (error, token = null) => {
    failedQueue.forEach(promise => {
        if (token) {
            promise.resolve(token);
        } else {
            promise.reject(error);
        }
    });

    failedQueue = [];
};







const requestHandler = async ({
                                  method = 'GET',       // HTTP 메서드 (GET, POST, PUT, DELETE)
                                  endpoint = '/',       // 엔드포인트
                                  data = {},            // POST/PUT 요청 시 데이터
                                  successMessage = '',  // 성공 메시지
                                  errorMessage = '',    // 실패 메시지
                              }) => {
    try {
        // 토큰 가져오기
        const token = localStorage.getItem('accessToken');
     /*   if (!token) {
            throw new Error("Access token not found");
        }*/

        // 요청 보내기
        const response = await axios({
            method,
            url: `${BASE_URL}/api${endpoint}`,
        /*    headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },*/
            data: ['POST', 'PUT'].includes(method) ? data : undefined, // 데이터는 POST/PUT 요청에만 포함
            timeout: 60000,
        });

        // 성공 메시지 로그
        if (successMessage) {
            console.log(successMessage, response.data);
        }

        return response.data; // 성공 데이터 반환
    } catch (error) {
        if (error.response?.status === 401 && !error.config._retry) {
            const originalRequest = error.config;
            originalRequest._retry = true;

            if (isRefreshing) {
                // 토큰 갱신 중인 경우 큐에 추가
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then((token) => {
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return axios(originalRequest);
                });
            }

            isRefreshing = true;

            try {
                const newAccessToken = await refreshAccessToken();
                isRefreshing = false;
                processQueue(null, newAccessToken);

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return axios(originalRequest);
            } catch (refreshError) {
                isRefreshing = false;
                processQueue(refreshError, null);
                throw refreshError;
            }
        }

       if (errorMessage) {
            console.error(errorMessage, error.message);
        }

        throw error;
    }
};

export default requestHandler;
