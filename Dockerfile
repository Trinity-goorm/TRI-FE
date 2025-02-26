# Node.js 기반 이미지 사용 - React Router v7 (Node.js 20 버전 이상 요구)
FROM node:20-alpine

# 작업 디렉토리 설정
WORKDIR /app

# Build arguments 설정
ARG VITE_APP_API_KEY
ARG VITE_API_KEY
ARG VITE_AUTH_DOMAIN
ARG VITE_PROJECT_ID
ARG VITE_STORAGE_BUCKET
ARG VITE_MESSAGING_SENDID
ARG VITE_APP_ID
ARG VITE_VAPID_KEY

# 환경변수로 변환
ENV VITE_APP_API_KEY=$VITE_APP_API_KEY
ENV VITE_API_KEY=$VITE_API_KEY
ENV VITE_AUTH_DOMAIN=$VITE_AUTH_DOMAIN
ENV VITE_PROJECT_ID=$VITE_PROJECT_ID
ENV VITE_STORAGE_BUCKET=$VITE_STORAGE_BUCKET
ENV VITE_MESSAGING_SENDID=$VITE_MESSAGING_SENDID
ENV VITE_APP_ID=$VITE_APP_ID
ENV VITE_VAPID_KEY=$VITE_VAPID_KEY
ENV VITE_BASE_URL=$VITE_BASE_URL

# package.json과 package-lock.json 복사 후 종속성 설치
COPY package*.json ./
RUN npm ci

# 소스 코드 복사
COPY . .

# 프로덕션용 빌드
RUN npm run build

# 프로덕션 모드로 실행
CMD ["npm", "run", "preview", "--", "--host", "--port", "5173"]
