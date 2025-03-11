import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from '@sinonjs/text-encoding';
import { vi } from 'vitest';

export const navigateFn = vi.fn();
vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');
  return {
    ...original,
    useNavigate: () => navigateFn,
  };
});

beforeEach(() => {
  navigateFn.mockReset();
});

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// 만약 import.meta 환경 변수가 필요하다면
globalThis.importMeta = {
  env: {
    VITE_BASE_URL: 'http://localhost:8080/',
  },
};
