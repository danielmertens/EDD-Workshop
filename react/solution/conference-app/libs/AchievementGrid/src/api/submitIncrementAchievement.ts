export async function submitIncrementAchievement(achievementId: number) {
    try {
        await fetch(`http://localhost:5001/api/appdata/achievements/${achievementId}/increment`, {
            method: "POST"
        });
    }
    catch (e) {
        console.log(e);
    }
}