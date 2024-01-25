import { Injectable } from '@angular/core';
import { SubmitAchievement } from './models';

@Injectable({
  providedIn: 'root'
})
export class AchievementFormService {
  async submitAchievement(achievement: SubmitAchievement) {
    try {
      await fetch("http://localhost:5001/api/appdata/achievements", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(achievement)
      });
    }
    catch (e) {
      console.log(e);
    }
  }
}
