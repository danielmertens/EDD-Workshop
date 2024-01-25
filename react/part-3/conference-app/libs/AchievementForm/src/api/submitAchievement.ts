import { SubmitAchievement } from '@conference-app/Shared-Models';

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