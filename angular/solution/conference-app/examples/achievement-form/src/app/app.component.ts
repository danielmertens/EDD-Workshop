import { Component, OnInit } from '@angular/core';
import { AchievementFormComponent } from "@conference-app/achievement-form";
import { SubmitAchievement } from "@conference-app/shared-models";
import { Server } from 'miragejs';

@Component({
  standalone: true,
  imports: [AchievementFormComponent],
  selector: 'conference-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'example-achievement-form';

  ngOnInit() {
    new Server({
      routes() {
        this.post('http://localhost:5001/api/appdata/achievements', (_schema, request) => {
          const achievement: SubmitAchievement = JSON.parse(request.requestBody);
          console.log(achievement);
          return {}
        })
      }
    })
  }

  handleOnClose() {
    console.log("onCloseCalled");
  }
}
