import { render } from '@testing-library/react';
import FullScreenLoading from '.';

describe('FullScreenLoading', () => {
  it('should render if it exists', () => {
    const { container } = render(<FullScreenLoading />);

    expect(container).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { container } = render(<FullScreenLoading />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
