import { render } from '@testing-library/react';
import PageWrapper from '.';

describe('PageWrapper', () => {
  it('should render if it exists', () => {
    const { container } = render(<PageWrapper />);

    expect(container).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { container } = render(<PageWrapper />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
