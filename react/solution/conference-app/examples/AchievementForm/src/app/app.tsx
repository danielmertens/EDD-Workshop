// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { AchievementForm } from '@conference-app/AchievementForm';
import { SubmitAchievement } from '@conference-app/Shared-Models';
import { Server } from 'miragejs';

new Server({
  routes() {
    this.post('http://localhost:5001/api/appdata/achievements', (schema, request) => {
      const achievement: SubmitAchievement = JSON.parse(request.requestBody);
      console.log(achievement);
      return {}
    })
  }
})

export function App() {
  return (
    <div>
      <AchievementForm onClose={() => console.log("onClose called")} />
    </div>
  );
}

export default App;
