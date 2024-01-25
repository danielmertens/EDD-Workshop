import { StyledContainer } from '@conference-app/Shared-UI';
import { AchievementData } from '@conference-app/Shared-Models';
import { submitIncrementAchievement } from '../../api/submitIncrementAchievement';
import styles from './Achievement.module.scss';

export interface AchievementProps {
    achievement: AchievementData,
    reloadData: () => void;
}

export function Achievement({ achievement, reloadData }: AchievementProps) {
    const increment = async () => {
        await submitIncrementAchievement(achievement.id);
        reloadData();
    }
    return (
        <StyledContainer styleType={achievement.styleType} borderRadius={12}>
            <div className={styles.achievement}>
                <div className={styles.achievementTitle}>{achievement.title}</div>
                {RenderProgress(achievement.progress, achievement.goal)}
                {achievement.status !== "completed" &&
                    // Style this better
                    <button className={styles.achievementButton} onClick={increment}>+1</button>
                }
            </div>
        </StyledContainer>
    )
}

function RenderProgress(progress: number, max: number) {
    if (progress === max) {
        return <span>Completed ⭐</span>;
    } else {
        return (
            <span>
                <progress value={progress} max={max} />
                <span className={styles.achievementProgressText}>{progress}/{max}</span>
            </span>)
    }
}
