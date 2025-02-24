# Node.js 기반 이미지 사용 - React Router v7 (Node.js 20 버전 이상 요구)
FROM node:20-alpine

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사 후 종속성 설치
COPY package*.json ./
RUN npm ci

# 소스 코드 복사
COPY . .

# 프로덕션용 빌드
RUN npm run build

# 프로덕션 모드로 실행
CMD ["npm", "run", "preview", "--", "--host", "--port", "5173"]
