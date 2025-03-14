import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from '@sinonjs/text-encoding';
import { beforeEach, vi } from 'vitest';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// 만약 import.meta 환경 변수가 필요하다면
globalThis.importMeta = {
  env: {
    VITE_BASE_URL: 'http://localhost:8080',
  },
};

export const navigateFn = vi.fn();
vi.mock('react-router-dom', () => {
  const actual = require('react-router-dom');
  return {
    ...actual,
    useNavigate: navigateFn,
  };
});

beforeEach(() => {
  navigateFn.mockReset();
});
