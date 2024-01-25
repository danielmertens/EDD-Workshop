import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchievementGridService {
  async submitIncrementAchievement(achievementId: number) {
    try {
        await fetch(`http://localhost:5001/api/appdata/achievements/${achievementId}/increment`, {
            method: "POST"
        });
    }
    catch (e) {
        console.log(e);
    }
  }
}
