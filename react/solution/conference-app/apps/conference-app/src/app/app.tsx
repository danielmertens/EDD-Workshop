import styles from './App.module.scss';
import {Header} from '@conference-app/Header';
import {AchievementGrid} from '@conference-app/AchievementGrid';
import { useFetchAppData } from '../api/useFetchAppData';
import { useEffect, useState } from 'react';

function App() {
  const [ appData, reload ] = useFetchAppData();
  const [ persistedData, setPersistedData ] = useState(appData);

  useEffect(() => {
    if (appData) {
      setPersistedData(appData);
    }
  }, [appData]);
  
  if (!persistedData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.app}>
      <Header user={persistedData.user} achievementSummary={persistedData.achievementSummary}/>
      <AchievementGrid achievements={persistedData.achievements} reloadData={reload} />
    </div>
  );
}

export default App;
