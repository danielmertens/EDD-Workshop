import { SubmitAchievement } from './models';

export async function submitAchievement(achievement: SubmitAchievement) {
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