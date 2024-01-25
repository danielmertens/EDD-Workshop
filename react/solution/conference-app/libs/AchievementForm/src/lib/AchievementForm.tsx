import { FormEvent, useState } from 'react';
import { SubmitAchievement } from '@conference-app/Shared-Models';
import { submitAchievement } from '../api/submitAchievement';
import { StyledContainer } from '@conference-app/Shared-UI';
import styles from './AchievementForm.module.scss';

interface AchievementFormProps {
    onClose: () => void;
}

export function AchievementForm(props: AchievementFormProps) {
  const [title, setTitle] = useState('');
  const [number, setNumber] = useState(0);
  const [styleType, setStyleType] = useState(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const achievement: SubmitAchievement = {
        title,
        goal: number,
        styleType: styleType,
    };

    await submitAchievement(achievement);

    props.onClose();
  };

  const handleCancel = () => {
    props.onClose();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.achievementForm}>
      <div>
        <label htmlFor="title">Title:</label><br />
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <br/>
      <div>
        <label htmlFor="number">Number:</label><br />
        <input
          type="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </div>
      <br/>
      <div>
        <div>Select style:</div>
        <label htmlFor="type" className={styles.achievementFormSelector}>
            {[...Array(6)].map((x, i) =>
                <label key={i} className={styles.achievementFormRadioInline}>
                    <input type="radio" name="type" value={i + 1} onChange={() => setStyleType(i+1)}/>
                    <StyledContainer styleType={i + 1} borderRadius={6}>
                      <div className={styles.achievementFormStyleExample}>{i+1}</div>
                    </StyledContainer>
                </label>
            )}
        </label>
      </div>

      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
