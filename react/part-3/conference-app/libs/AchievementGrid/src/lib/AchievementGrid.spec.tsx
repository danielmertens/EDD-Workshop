import { render } from '@testing-library/react';

import AchievementGrid from './AchievementGrid';

describe('AchievementGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AchievementGrid />);
    expect(baseElement).toBeTruthy();
  });
});
