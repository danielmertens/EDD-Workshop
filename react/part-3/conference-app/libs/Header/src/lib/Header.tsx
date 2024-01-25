import { AchievementSummary, User } from '@conference-app/Shared-Models';
import { Profile } from './Profile/Profile';
import { ProgressGraph } from './ProgressGraph/ProgressGraph';
import styles from './Header.module.scss';

export interface HeaderProps {
  user: User;
  achievementSummary: AchievementSummary;
}

export function Header(props: HeaderProps) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <Profile user={props.user} />
      </div>
      <div>
        <ProgressGraph achievementSummary={props.achievementSummary} />
      </div>
    </div>
  );
}