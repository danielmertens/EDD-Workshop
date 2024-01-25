import { render } from '@testing-library/react';

import SharedUI from './Shared-UI';

describe('SharedUI', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUI />);
    expect(baseElement).toBeTruthy();
  });
});
