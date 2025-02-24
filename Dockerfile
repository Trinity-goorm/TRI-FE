# 1. Node.js 기반 이미지 사용
FROM node:18-alpine

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. package.json과 package-lock.json 복사 후 종속성 설치
COPY package.json package-lock.json ./
RUN npm install

# 4. 소스 코드 복사
COPY . .

# 5. Vite 개발 서버 실행
CMD ["npm", "run", "dev", "--", "--host"]