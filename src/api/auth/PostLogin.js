import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

const PostLogin = async (authCode) => {
  try {
    const response = await axios.post(`http://10.0.133.177:8080/login`, {
      authCode,
    });

    return response;
  } catch (error) {
    console.error('로그인 실패:', error.response?.data || error.message);
    throw new Error('로그인 실패');
  }
};

export default PostLogin;
