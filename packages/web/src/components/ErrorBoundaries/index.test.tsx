import { render } from '@testing-library/react';
import ErrorBoundaries from '.';

describe('ErrorBoundaries', () => {
  beforeAll(() => {
    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://test.com',
        reload: jest.fn(),
      },
      writable: true,
    });
  });

  it('should render if it exists', () => {
    const { getByText } = render(<ErrorBoundaries />);

    expect(getByText('Something went wrong')).toBeTruthy();
    expect(
      getByText('Please either refresh page or return to home to try again.')
    ).toBeTruthy();
    expect(getByText('Refresh Page')).toBeTruthy();
    expect(getByText('Back to Home')).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { container } = render(<ErrorBoundaries />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call back to home', () => {
    const { getByText } = render(<ErrorBoundaries />);

    const btn = getByText('Back to Home');

    btn.click();
    expect(window.location.href).toEqual('/');
  });

  it('should call reload page', () => {
    const { getByText } = render(<ErrorBoundaries />);

    const btn = getByText('Refresh Page');

    btn.click();
    expect(window.location.reload).toHaveBeenCalled();
  });
});
