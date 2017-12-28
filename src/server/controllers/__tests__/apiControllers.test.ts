import { Request, Response, NextFunction } from 'express';
import * as boom from 'boom';
import { portofolioController, portofolioDetailController } from '../apiControllers';
import { list, getById } from '../../services/portfolioService';
jest.mock('../../services/portfolioService');

const mockListResponse: Portfolio[] = [];
const mockGetByIdResponse: Portfolio = {
  id: 'the-id',
  title: 'The Title',
  category: [],
  tags: [],
  imagePaths: {},
};

const mockNext = jest.fn() as NextFunction;

describe('portofolioController', () => {
  test('should send response as json', async () => {
    const mockList = jest.fn(() => Promise.resolve(mockListResponse));
    (list as jest.Mock<{}>).mockImplementation(mockList);

    const mockReq = {} as Request;
    mockReq.query = {};

    const mockRes = {} as Response;
    mockRes.json = jest.fn();

    await portofolioController(mockReq, mockRes, mockNext);
    expect(mockRes.json).toBeCalledWith(mockListResponse);
  });

  test('should pass query params to list method', async () => {
    const mockList = jest.fn(() => Promise.resolve(mockListResponse));
    (list as jest.Mock<{}>).mockImplementation(mockList);

    const mockReq = {} as Request;
    const query = {
      categories: ['a', 'b', 'c'],
      tags: ['d', 'e', 'f'],
      s: 'Search term',
      pageSize: 20,
      pageNumber: 5,
    };
    mockReq.query = query;

    const mockRes = {} as Response;
    mockRes.json = jest.fn();

    await portofolioController(mockReq, mockRes, mockNext);
    expect(list).toBeCalledWith({
      categories: ['a', 'b', 'c'],
      tags: ['d', 'e', 'f'],
      searchTerm: 'Search term',
      pageSize: 20,
      pageNumber: 5,
    });
  });

  test('should send an error response', async () => {
    const mockList = jest.fn(() => Promise.reject(new Error('some error')));
    (list as jest.Mock<{}>).mockImplementation(mockList);

    const mockReq = {} as Request;
    mockReq.query = {};

    const mockRes = {} as Response;
    mockRes.json = jest.fn();

    await portofolioController(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalledWith(boom.badImplementation('some error'));
  });
});

describe('portofolioDetailController', () => {
  test('should pass the param id to getById', async () => {
    const mockGetById = jest.fn(() => Promise.resolve(mockGetByIdResponse));
    (getById as jest.Mock<{}>).mockImplementation(mockGetById);

    const mockReq = {} as Request;
    mockReq.param = jest.fn(() => 'the-id');

    const mockRes = {} as Response;
    mockRes.json = jest.fn();

    await portofolioDetailController(mockReq, mockRes, mockNext);
    expect(getById).toBeCalledWith('the-id');
  });

  test('should send response as json', async () => {
    const mockGetById = jest.fn(() => Promise.resolve(mockGetByIdResponse));
    (getById as jest.Mock<{}>).mockImplementation(mockGetById);

    const mockReq = {} as Request;
    mockReq.param = jest.fn(() => 'the-id');

    const mockRes = {} as Response;
    mockRes.json = jest.fn();

    await portofolioDetailController(mockReq, mockRes, mockNext);
    expect(mockRes.json).toBeCalledWith(mockGetByIdResponse);
  });

  test('should respond with a 404 when item is not found', async () => {
    const mockGetById = jest.fn(() => Promise.resolve(undefined));
    (getById as jest.Mock<{}>).mockImplementation(mockGetById);

    const mockReq = {} as Request;
    mockReq.param = jest.fn(() => 'the-id');

    const mockRes = {} as Response;

    await portofolioDetailController(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalledWith(boom.notFound('Portfolio item does not exist'));
  });
});
