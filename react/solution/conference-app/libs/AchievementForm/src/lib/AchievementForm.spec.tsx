import { render } from '@testing-library/react';

import AchievementForm from './AchievementForm';

describe('AchievementForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AchievementForm />);
    expect(baseElement).toBeTruthy();
  });
});
