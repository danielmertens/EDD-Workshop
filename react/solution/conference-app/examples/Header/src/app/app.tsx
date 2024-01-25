import styles from './app.module.scss';
import { Header } from '@conference-app/Header';

export function App() {
  const userInfo = {id: 10, name: "John Doe", profileImage: "https://picsum.photos/150/150"};
  var summaryInfo = {completed: 1000000, uncompleted: 3, total: 100000}

  return (
    <div>
      <Header achievementSummary={summaryInfo} user={userInfo}/>
    </div>
  );
}

export default App;
