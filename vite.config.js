import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {visualizer} from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ["catch-ping.com"],
    proxy: {
      "/api": {
        target:
          "http://internal-trinity-be-alb-619775524.ap-northeast-2.elb.amazonaws.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          open: true, // 자동으로 분석 결과를 브라우저에서 열기
          filename: 'bundle-report.html', // 번들 분석 HTML 저장 파일
          gzipSize: true, // gzip 압축된 크기 표시
          brotliSize: true // brotli 압축된 크기 표시
        })
      ],
    },
  }
});
