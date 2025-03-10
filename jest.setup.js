import "@testing-library/jest-dom";

import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;


Object.defineProperty(global, 'importMeta', {
    value: {
        env: {
            VITE_BASE_URL: 'http://localhost:8080'
        }
    }
});