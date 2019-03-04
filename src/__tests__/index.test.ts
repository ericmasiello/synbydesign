import '../index';
import app from '../server/app';
import appStartup from '../server/utils/appStartup';
jest.mock('../server/app');

const mockListen = jest.fn();

// @ts-ignore
app.listen.mockImplementation(mockListen);

test('should start the app', () => {
  expect(app.listen).toBeCalledWith(app.get('port') || 3000, appStartup);
});
