import { render, act, waitFor } from '@testing-library/react';
import Qoute from '../components/quote';

global.IS_REACT_ACT_ENVIRONMENT = true;

describe(Qoute, () => {
  test('should fetch data', async () => {
    const fakeResponse = { quote: 'qoute 1', author: 'test author' };
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;
    render(<Qoute />);
    await act(async () => {
      await waitFor(() => expect(mockedFetch).toHaveBeenCalledTimes(1));
    });
  });
});
