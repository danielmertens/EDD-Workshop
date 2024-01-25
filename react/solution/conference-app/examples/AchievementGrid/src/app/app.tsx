// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { AchievementData } from '@conference-app/Shared-Models';
import { AchievementGrid } from '@conference-app/AchievementGrid';
import { Server } from 'miragejs';

new Server({
  routes() {
    this.post('http://localhost:5001/api/appdata/achievements/:achievementId/increment', (schema, request) => {
      const id = request.params.achievementId;
      console.log(`Incrementing achievement ${id}...`);
      return {}
    })
  }
})

export function App() {
  const mockAchievements: AchievementData[] = [
    {id: 1, title: "Example", progress: 0, goal: 5, status: "uncompleted", styleType: 1}
  ];

  return (
    <div>
      <AchievementGrid achievements={mockAchievements} reloadData={() => console.log("Reload called")}/>
    </div>
  );
}

export default App;
