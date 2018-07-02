import { likeAction, unlikeAction } from '../likeService';
import fetch from 'node-fetch';
jest.mock('node-fetch');

const mockResolve = jest.fn(() =>
  Promise.resolve({
    status: 200,
    statusText: 'OK',
  } as Response),
);
(fetch as jest.Mock<{}>).mockImplementation(mockResolve);

beforeEach(() => {
  mockResolve.mockClear();
});

describe('likeAction', () => {
  test('should return a status response', () => {
    return likeAction('123', 'the-title').then(result => {
      expect(result.message).toBe('OK');
      expect(result.code).toBe(200);
    });
  });

  test('calls Google sheet with a like action', () => {
    return likeAction('123').then(result => {
      const url = new URL(mockResolve.mock.calls[0][0]);

      expect(url.searchParams.get('action')).toBe('like');
    });
  });

  test('calls Google sheet with the appropriate custom parameters', () => {
    return likeAction('123', 'the-title').then(result => {
      const url = new URL(mockResolve.mock.calls[0][0]);

      expect(url.searchParams.get('id')).toBe('123');
      expect(url.searchParams.get('description')).toBe('the-title');
    });
  });
});

describe('unlikeAction', () => {
  test('should return a status response', () => {
    return unlikeAction('123', 'the-title').then(result => {
      expect(result.message).toBe('OK');
      expect(result.code).toBe(200);
    });
  });

  test('calls Google sheet with a like action', () => {
    return unlikeAction('123').then(result => {
      const url = new URL(mockResolve.mock.calls[0][0]);

      expect(url.searchParams.get('action')).toBe('unlike');
    });
  });

  test('calls Google sheet with the appropriate custom parameters', () => {
    return unlikeAction('123', 'the-title').then(result => {
      const url = new URL(mockResolve.mock.calls[0][0]);

      expect(url.searchParams.get('id')).toBe('123');
      expect(url.searchParams.get('description')).toBe('the-title');
    });
  });
});
