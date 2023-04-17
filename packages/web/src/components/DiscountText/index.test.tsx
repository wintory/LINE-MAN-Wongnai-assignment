import { render } from '@testing-library/react';
import DiscountText from '.';

describe('DiscountText', () => {
  it('should render if it exists', () => {
    const { getByText } = render(
      <DiscountText fullPrice={100} discountPrice={60} />
    );

    expect(getByText('price:')).toBeTruthy();
    expect(getByText('100')).toBeTruthy();
    expect(getByText('60 Baht')).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { container } = render(
      <DiscountText fullPrice={100} discountPrice={60} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
