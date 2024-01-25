import React, { useEffect } from 'react';
import {Achievement} from './Achievement/Achievement';
import {Modal} from '@conference-app/Shared-UI';
import {AchievementForm} from '@conference-app/AchievementForm';
import { AchievementData } from '@conference-app/Shared-Models';
import styles from './AchievementGrid.module.scss';

export interface AchievementGridProps {
    achievements: AchievementData[];
    reloadData: () => void;
}

export function AchievementGrid(props: AchievementGridProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [filter, setFilter] = React.useState('All');
    const [filteredAchievements, setFilteredAchievements] = React.useState(props.achievements);

    const LoadGrid = React.useCallback(() => {
        if (filter === 'All') {
            setFilteredAchievements(props.achievements);
        } else if (filter === 'Completed') {
            setFilteredAchievements(props.achievements.filter((achievement) => achievement.status === "completed"));
        } else if (filter === 'Uncompleted') {
            setFilteredAchievements(props.achievements.filter((achievement) => achievement.status === "uncompleted"));
        }
    }, [props.achievements, filter]);
    
    useEffect(() => {
        LoadGrid();
    }, [LoadGrid]);

    const openAddAchiementForm = () => {
        setIsOpen(true);
    }

    const closeAddAchiementForm = () => {
        setIsOpen(false);
        props.reloadData();
    }

    const filterChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value);
    }

    return (
        <>
            <div className={styles.achievementGridContainer}>
                <div className={styles.achievementGridControls}>
                    <button onClick={openAddAchiementForm}>Add</button>
                    <select defaultValue={"All"} onChange={filterChanged} value={filter}>
                        <option value='All'>All</option>
                        <option value='Completed' >Completed</option>
                        <option value='Uncompleted' >Uncompleted</option>
                    </select>
                </div>
                <div className={styles.achievementGridFivider}></div>
                <div className={styles.achievementGrid}>
                    {filteredAchievements.map(achievement => (
                        <Achievement key={achievement.id} achievement={achievement} reloadData={props.reloadData}/>
                    ))}
                </div>
            </div>

            <Modal isOpen={isOpen}>
                <AchievementForm onClose={closeAddAchiementForm}/>
            </Modal>
        </>
    )
}
