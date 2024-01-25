import { AppData, SubmitAchievement } from './models';
const express = require('express')
const cors = require('cors')

const app = express()
const port = 5001

app.use(cors());
app.use(express.json())

app.get('/api/appdata', (_, res) => {
  res.json(appData)
});

app.post('/api/appdata/achievements', (req, res) => {
  const achievement: SubmitAchievement = req.body;

  appData.achievements.push({
    id: appData.achievements.length + 1,
    title: achievement.title,
    progress: 0,
    goal: achievement.goal,
    styleType: achievement.styleType,
    status: "uncompleted"
  });

  updateSummary();

  res.status(200).send();
});

app.post('/api/appdata/achievements/:id/increment', (req, res) => {
  const achievementId = parseInt(req.params.id);
  const achievement = appData.achievements.find(a => a.id === achievementId);

  if (achievement && achievement.progress < achievement.goal) {
    achievement.progress += 1;

    if (achievement.progress >= achievement.goal) {
      achievement.status = "completed";
    }
  }

  updateSummary();

  res.status(200).send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

function updateSummary(){
  const total = appData.achievements.length;
  let completed = 0;
  let uncompleted = 0;

  for (let i = 0; i < appData.achievements.length; i++) {
    const element = appData.achievements[i];
    if (element.status === 'completed') {
      completed++;
    }
    else {
      uncompleted++;
    }
  }

  appData.achievementSummary = {
    total,
    completed,
    uncompleted
  }
}

const appData: AppData = {
  user: {
    id: 1,
    name: "John Doe",
    profileImage: "https://picsum.photos/150/150"
  },
  achievementSummary: {
    total: 3,
    completed: 1,
    uncompleted: 2
  },
  achievements: [
    {
      id: 1,
      title: "Attend a conference",
      progress: 1,
      goal: 1,
      styleType: 1,
      status: "completed"
    },
    {
      id: 2,
      title: "Complete the workshop",
      progress: 1,
      goal: 3,
      styleType: 2,
      status: "uncompleted"
    },
    {
      id: 3,
      title: "Attend 10 talks",
      progress: 0,
      goal: 10,
      styleType: 3,
      status: "uncompleted"
    }
  ]
}