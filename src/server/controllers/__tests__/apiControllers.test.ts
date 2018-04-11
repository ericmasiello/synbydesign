import { Request, Response, NextFunction } from 'express';
import * as boom from 'boom';
import {
  portofolioController,
  portofolioDetailController,
} from '../apiControllers';
import { list, getById } from '../../services/portfolioService';
jest.mock('../../services/portfolioService');

const mockPortfolioItem: Portfolio = {
  id: 'the-id',
  title: 'The Title',
  category: [],
  tags: [],
  imagePaths: [],
};

const mockListResponse: PortfolioFilterResult = {
  items: [mockPortfolioItem],
  currentPageNumber: 1,
  pageSize: 10,
  totalPages: 1,
  filterCategories: ['filter 1', 'filter 2'],
  filterTags: ['tag 1', 'tags 2'],
  filterSearchTerm: 'search term filter',
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
    mockRes.set = jest.fn().mockReturnThis();

    await portofolioController(mockReq, mockRes, mockNext);
    expect(mockRes.set).toBeCalledWith({
      _currentpagenumber: mockListResponse.currentPageNumber.toString(),
      _pagesize: mockListResponse.pageSize.toString(),
      _totalpages: mockListResponse.totalPages.toString(),
      _filtercategories: mockListResponse.filterCategories.join(','),
      _filtertags: mockListResponse.filterTags.join(','),
      _filtersearchterm: mockListResponse.filterSearchTerm,
    });
    expect(mockRes.json).toBeCalledWith(mockListResponse.items);
  });

  test('should pass query params to list method', async () => {
    const mockList = jest.fn(() => Promise.resolve(mockListResponse));
    (list as jest.Mock<{}>).mockImplementation(mockList);

    const mockReq = {} as Request;
    const query = {
      categories: 'a,b,c',
      tags: 'd,e,f',
      searchTerm: 'Search term',
      pageSize: '20',
      requestedPageNumber: '5',
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
    const mockGetById = jest.fn(() => Promise.resolve(mockPortfolioItem));
    (getById as jest.Mock<{}>).mockImplementation(mockGetById);

    const mockReq = {} as Request;
    mockReq.params = { id: 'the-id' };

    const mockRes = {} as Response;
    mockRes.json = jest.fn();

    await portofolioDetailController(mockReq, mockRes, mockNext);
    expect(getById).toBeCalledWith('the-id');
  });

  test('should send response as json', async () => {
    const mockGetById = jest.fn(() => Promise.resolve(mockPortfolioItem));
    (getById as jest.Mock<{}>).mockImplementation(mockGetById);

    const mockReq = {} as Request;
    mockReq.params = { id: 'the-id' };

    const mockRes = {} as Response;
    mockRes.json = jest.fn();

    await portofolioDetailController(mockReq, mockRes, mockNext);
    expect(mockRes.json).toBeCalledWith(mockPortfolioItem);
  });

  test('should respond with a 404 when item is not found', async () => {
    const mockGetById = jest.fn(() => Promise.resolve(undefined));
    (getById as jest.Mock<{}>).mockImplementation(mockGetById);

    const mockReq = {} as Request;
    mockReq.params = { id: 'the-id' };

    const mockRes = {} as Response;

    await portofolioDetailController(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalledWith(
      boom.notFound('Portfolio item does not exist'),
    );
  });
});
