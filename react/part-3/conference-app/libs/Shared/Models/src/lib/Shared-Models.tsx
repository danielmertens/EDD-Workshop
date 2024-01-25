export type AppData = {
  user: User;
  achievements: AchievementData[];
  achievementSummary: AchievementSummary;
}

export type User = {
  id: number;
  name: string;
  profileImage: string;
}

export type AchievementData = {
  id: number;
  title: string;
  progress: number;
  goal: number;
  styleType: number;
  status: "completed" | "uncompleted";
}

export type AchievementSummary = {
  total: number;
  completed: number;
  uncompleted: number;
}

export type SubmitAchievement = {
  title: string;
  goal: number;
  styleType: number;
}