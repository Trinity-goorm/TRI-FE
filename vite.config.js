import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js', // 📌 경로 확인 필요!
    exclude: [...configDefaults.exclude, 'test/**'], // 📌 중복 제거된 exclude
    testTimeout: 20000, // 📌 필요 시 늘리기
    coverage: {
      provider: 'v8', // 📌 c8 설치 확인 필요!
      reporter: ['text', 'json', 'html'],
      all: true,
      include: ['src/**'],
      exclude: ['node_modules/**', 'test/**', 'src/test/**'], // 📌 개선된 exclude 설정
    },
  },
});
