import { describe, expect } from 'vitest';
import { formatBirth } from '../../util/formatBirth.js';
import { formatDate } from '../../util/formatDate.js';
import { formatPrice } from '../../util/formatPrice.js';
import { formatRating } from '../../util/formatRating.js';

describe('formatBirth 유틸 함수 테스트', () => {
  it('숫자 8자리를 연도(4)-월(2)-일(2)로 반환한다.', () => {
    const stringBirth = '20011210';
    const result = formatBirth(stringBirth);
    expect(result).toBe('2001-12-10');
  });

  it('8자리가 아닌 입력은 에러를 던진다.', () => {
    const shortInput = '2001121';
    expect(() => formatBirth(shortInput)).toThrow();

    const longInput = '200112100';
    expect(() => formatBirth(longInput)).toThrow();
  });
});

describe('formatDate 유틸 함수 테스트', () => {
  it('날짜를 월.일 (요일)로 반환한다 - 한 자리 일', () => {
    const stringDate = '2025-03-05';
    const result = formatDate(stringDate);
    expect(result).toBe('3.05 (수)');
  });

  it('날짜를 월.일 (요일)로 반환한다 - 두 자리 일', () => {
    const stringDate = '2025-03-15';
    const result = formatDate(stringDate);
    expect(result).toBe('3.15 (토)');
  });

  it('유효하지 않은 날짜는 에러를 던진다.', () => {
    expect(() => formatDate('2025-13-01')).toThrow('Invalid date format');
    expect(() => formatDate('invalid')).toThrow('Invalid date format');
    expect(() => formatDate('')).toThrow('Invalid date format');
  });
});

describe('formatPrice 유틸 함수 테스트', () => {
  it('숫자를 0원/천원/만원 단위로 반환한다.', () => {
    const zeroPrice = '0';
    expect(formatPrice(zeroPrice)).toBe('0원');

    const chunPrice = '1000';
    expect(formatPrice(chunPrice)).toBe('1천원');

    const manPrice = '30000';
    expect(formatPrice(manPrice)).toBe('3만원');
  });
});

describe('formatRating 유틸 함수 테스트', () => {
  it('정수는 소수점 한 자리로 반환한다.', () => {
    expect(formatRating('2')).toBe('2.0');
  });

  it('소수점 있는 숫자는 그대로 반환한다.', () => {
    expect(formatRating('2.5')).toBe(2.5);
  });

  it('유효하지 않은 입력은 NaN을 반환한다.', () => {
    expect(() => formatRating('NaN')).toThrow();
  });
});
