import { Chart as ChartJS, ArcElement, ChartData, ChartOptions, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { AchievementSummary } from '@conference-app/Shared-Models';
import styles from './ProgressGraph.module.scss';

export interface ProgressGraphProps {
    achievementSummary: AchievementSummary;
}

ChartJS.register(ArcElement, Tooltip);

export function ProgressGraph(props: ProgressGraphProps) {
    const total = props.achievementSummary.total;
    const completed = props.achievementSummary.completed;
    const uncompleted = props.achievementSummary.uncompleted;

    const options: ChartOptions<"doughnut"> = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
            },
        }
    }
    const data: ChartData<"doughnut", number[], string> = {
        labels: ['Completed', 'Uncompleted'],
        datasets: [
            {
                label: '',
                data: [completed, uncompleted],
                backgroundColor: [
                    'rgba(255, 226, 0, 1)',
                    'rgba(0, 0, 0, 0.4)'
                ],
                borderWidth: 0,

            },
        ],
    };

    return (
        <div className={styles.progressGraphContainer}>
            <Doughnut data={data} options={options} />
            <div className={styles.doughnutText}>{`${completed}/${total}`}</div>
        </div>
    )
}