import { Component, OnInit } from '@angular/core';
import { AchievementGridComponent } from "@conference-app/achievement-grid";
import { Server } from 'miragejs';
import { AchievementData } from "@conference-app/shared-models";

@Component({
  standalone: true,
  imports: [AchievementGridComponent],
  selector: 'conference-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'example-achievement-grid';

  public mockAchievements: AchievementData[] = [
    {id: 1, title: "Example", progress: 0, goal: 5, status: "uncompleted", styleType: 1}
  ];

  ngOnInit() {
    new Server({
      routes() {
        this.post('http://localhost:5001/api/appdata/achievements/:achievementId/increment', (_schema, request: any) => {
          const id = request.params.achievementId;
          console.log(`Incrementing achievement ${id}...`);
          return {}
        })
      }
    })
  }

  handleReloadData() {
    console.log("Reload called");
  }
}
