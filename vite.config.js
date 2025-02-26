import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
});
