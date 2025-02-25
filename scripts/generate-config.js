import fs from "fs";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
const config = {
  apiKey: process.env.VITE_API_KEY,
  authDomain: process.env.VITE_AUTH_DOMAIN,
  projectId: process.env.VITE_PROJECT_ID,
  storageBucket: process.env.VITE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_MESSAGING_SENDID,
  appId: process.env.VITE_APP_ID,
};
fs.writeFileSync(
  "public/firebase-config.js",
  `self.FIREBASE_CONFIG = ${JSON.stringify(config)};`
);
console.log("Generated firebase-config.js:", config);
