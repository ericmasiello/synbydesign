import { Request, Response, NextFunction } from 'express';
import * as boom from 'boom';
import { likeController, unlikeController } from '../likeControllers';
import { likeAction, unlikeAction } from '../../services/likeService';
import { getById } from '../../services/portfolioService';
jest.mock('../../services/likeService');
jest.mock('../../services/portfolioService');

describe('likeController', () => {
  describe('success', () => {
    const mockGetById = jest.fn(() =>
      Promise.resolve({
        title: 'the-title',
      }),
    );

    const mockLikeAction = jest.fn(() =>
      Promise.resolve({
        code: 200,
        message: 'OK',
      }),
    );

    const mockReq = {
      params: {
        id: '123',
      },
    } as Request;

    const mockRes = {} as Response;
    mockRes.json = jest.fn();

    const mockNext = (() => {}) as NextFunction;

    beforeEach(() => {
      mockGetById.mockClear();
      mockLikeAction.mockClear();
      // @ts-ignore
      mockRes.json.mockClear();
      // @ts-ignore
      getById.mockImplementation(mockGetById);
      // @ts-ignore
      likeAction.mockImplementation(mockLikeAction);
    });

    it('should respond with a success response', () => {
      return likeController(mockReq, mockRes, mockNext).then((res: any) => {
        expect(mockRes.json).toBeCalledWith({
          success: true,
        });
      });
    });

    it('should fetch the portfolio item details based on the id', () => {
      return likeController(mockReq, mockRes, mockNext).then((res: any) => {
        expect(mockGetById).toBeCalledWith('123');
      });
    });

    it('should should call the likeAction service with id and title', () => {
      return likeController(mockReq, mockRes, mockNext).then((res: any) => {
        expect(mockLikeAction).toBeCalledWith('123', 'the-title');
      });
    });
  });

  describe('failed match by Portfolio.getById', () => {
    const mockGetById = jest.fn(() =>
      Promise.reject(new Error('Error in Portfolio.getById')),
    );

    const mockReq = {
      params: {
        id: '123',
      },
    } as Request;

    const mockRes = {} as Response;

    const mockNext = jest.fn() as NextFunction;

    beforeEach(() => {
      mockGetById.mockClear();
      // @ts-ignore
      getById.mockImplementation(mockGetById);
      // @ts-ignore
      mockNext.mockClear();
    });

    it('should call next with a boom error', () => {
      return likeController(mockReq, mockRes, mockNext).then(() => {
        // @ts-ignore
        const error = mockNext.mock.calls[0][0] as boom<null>;

        expect(mockNext).toBeCalled();
        expect(error.message).toBe('Error in Portfolio.getById');
        expect(error.output.statusCode).toBe(500);
      });
    });
  });

  describe('failed submitting like action (4XX)', () => {
    const mockGetById = jest.fn(() =>
      Promise.resolve({
        title: 'the-title',
      }),
    );

    const mockLikeAction = jest.fn(() =>
      Promise.resolve({
        code: 404,
        message: 'Not found',
      }),
    );

    const mockReq = {
      params: {
        id: '123',
      },
    } as Request;

    const mockRes = {} as Response;

    const mockNext = jest.fn() as NextFunction;

    beforeEach(() => {
      mockGetById.mockClear();
      // @ts-ignore
      getById.mockImplementation(mockGetById);
      // @ts-ignore
      mockNext.mockClear();
      mockLikeAction.mockClear();
      // @ts-ignore
      likeAction.mockImplementation(mockLikeAction);
    });

    it('should call next with a boom error', () => {
      return likeController(mockReq, mockRes, mockNext).then(() => {
        // @ts-ignore
        const error = mockNext.mock.calls[0][0] as boom<null>;

        expect(mockNext).toBeCalled();
        expect(error.message).toBe('Not found');
        expect(error.output.statusCode).toBe(400);
      });
    });
  });

  describe('failed submitting like action (500)', () => {
    const mockGetById = jest.fn(() =>
      Promise.resolve({
        title: 'the-title',
      }),
    );

    const mockLikeAction = jest.fn(() =>
      Promise.resolve({
        code: 500,
        message: 'Server error',
      }),
    );

    const mockReq = {
      params: {
        id: '123',
      },
    } as Request;

    const mockRes = {} as Response;

    const mockNext = jest.fn() as NextFunction;

    beforeEach(() => {
      mockGetById.mockClear();
      // @ts-ignore
      getById.mockImplementation(mockGetById);
      // @ts-ignore
      mockNext.mockClear();
      mockLikeAction.mockClear();
      // @ts-ignore
      likeAction.mockImplementation(mockLikeAction);
    });

    it('should call next with a boom error', () => {
      return likeController(mockReq, mockRes, mockNext).then(() => {
        // @ts-ignore
        const error = mockNext.mock.calls[0][0] as boom<null>;

        expect(mockNext).toBeCalled();
        expect(error.message).toBe('Server error');
        expect(error.output.statusCode).toBe(500);
      });
    });
  });
});

describe('unlikeController', () => {
  describe('success', () => {
    const mockGetById = jest.fn(() =>
      Promise.resolve({
        title: 'the-title',
      }),
    );

    const mockUnlikeAction = jest.fn(() =>
      Promise.resolve({
        code: 200,
        message: 'OK',
      }),
    );

    const mockReq = {
      params: {
        id: '123',
      },
    } as Request;

    const mockRes = {} as Response;
    mockRes.json = jest.fn();

    const mockNext = (() => {}) as NextFunction;

    beforeEach(() => {
      mockGetById.mockClear();
      mockUnlikeAction.mockClear();
      // @ts-ignore
      mockRes.json.mockClear();
      // @ts-ignore
      getById.mockImplementation(mockGetById);
      // @ts-ignore
      unlikeAction.mockImplementation(mockUnlikeAction);
    });

    it('should respond with a success response', () => {
      return unlikeController(mockReq, mockRes, mockNext).then((res: any) => {
        expect(mockRes.json).toBeCalledWith({
          success: true,
        });
      });
    });

    it('should fetch the portfolio item details based on the id', () => {
      return unlikeController(mockReq, mockRes, mockNext).then((res: any) => {
        expect(mockGetById).toBeCalledWith('123');
      });
    });

    it('should should call the likeAction service with id and title', () => {
      return unlikeController(mockReq, mockRes, mockNext).then((res: any) => {
        expect(mockUnlikeAction).toBeCalledWith('123', 'the-title');
      });
    });
  });

  describe('failed match by Portfolio.getById', () => {
    const mockGetById = jest.fn(() =>
      Promise.reject(new Error('Error in Portfolio.getById')),
    );

    const mockReq = {
      params: {
        id: '123',
      },
    } as Request;

    const mockRes = {} as Response;

    const mockNext = jest.fn() as NextFunction;

    beforeEach(() => {
      mockGetById.mockClear();
      // @ts-ignore
      getById.mockImplementation(mockGetById);
      // @ts-ignore
      mockNext.mockClear();
    });

    it('should call next with a boom error', () => {
      return unlikeController(mockReq, mockRes, mockNext).then(() => {
        // @ts-ignore
        const error = mockNext.mock.calls[0][0] as boom<null>;

        expect(mockNext).toBeCalled();
        expect(error.message).toBe('Error in Portfolio.getById');
        expect(error.output.statusCode).toBe(500);
      });
    });
  });

  describe('failed submitting like action (4XX)', () => {
    const mockGetById = jest.fn(() =>
      Promise.resolve({
        title: 'the-title',
      }),
    );

    const mockUnlikeAction = jest.fn(() =>
      Promise.resolve({
        code: 404,
        message: 'Not found',
      }),
    );

    const mockReq = {
      params: {
        id: '123',
      },
    } as Request;

    const mockRes = {} as Response;

    const mockNext = jest.fn() as NextFunction;

    beforeEach(() => {
      mockGetById.mockClear();
      // @ts-ignore
      getById.mockImplementation(mockGetById);
      // @ts-ignore
      mockNext.mockClear();
      mockUnlikeAction.mockClear();
      // @ts-ignore
      unlikeAction.mockImplementation(mockUnlikeAction);
    });

    it('should call next with a boom error', () => {
      return unlikeController(mockReq, mockRes, mockNext).then(() => {
        // @ts-ignore
        const error = mockNext.mock.calls[0][0] as boom<null>;

        expect(mockNext).toBeCalled();
        expect(error.message).toBe('Not found');
        expect(error.output.statusCode).toBe(400);
      });
    });
  });

  describe('failed submitting like action (500)', () => {
    const mockGetById = jest.fn(() =>
      Promise.resolve({
        title: 'the-title',
      }),
    );

    const mockUnlikeAction = jest.fn(() =>
      Promise.resolve({
        code: 500,
        message: 'Server error',
      }),
    );

    const mockReq = {
      params: {
        id: '123',
      },
    } as Request;

    const mockRes = {} as Response;

    const mockNext = jest.fn() as NextFunction;

    beforeEach(() => {
      mockGetById.mockClear();
      // @ts-ignore
      getById.mockImplementation(mockGetById);
      // @ts-ignore
      mockNext.mockClear();
      mockUnlikeAction.mockClear();
      // @ts-ignore
      unlikeAction.mockImplementation(mockUnlikeAction);
    });

    it('should call next with a boom error', () => {
      return unlikeController(mockReq, mockRes, mockNext).then(() => {
        // @ts-ignore
        const error = mockNext.mock.calls[0][0] as boom<null>;

        expect(mockNext).toBeCalled();
        expect(error.message).toBe('Server error');
        expect(error.output.statusCode).toBe(500);
      });
    });
  });
});
