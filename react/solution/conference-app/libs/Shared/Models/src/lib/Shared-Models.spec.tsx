import { render } from '@testing-library/react';

import SharedModels from './Shared-Models';

describe('SharedModels', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedModels />);
    expect(baseElement).toBeTruthy();
  });
});
