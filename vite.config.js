import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['catch-ping.com'],
    proxy: {
      '/api': {
        target:
          'http://internal-trinity-be-alb-619775524.ap-northeast-2.elb.amazonaws.com/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    exclude: [...configDefaults.exclude, 'node_modules/**'],
    testTimeout: 10000,
    coverage: {
      provider: 'v8', // V8 커버리지 사용
      reporter: ['text', 'html', 'clover'], // 출력 형식
      include: ['src/**/*.{js,jsx}'], // 커버리지 대상 파일
      exclude: ['node_modules/**', 'dist/**', 'src/test/**'], // 제외할 파일
    },
  },
});
