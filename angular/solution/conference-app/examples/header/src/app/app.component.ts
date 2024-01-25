import { Component } from '@angular/core';
import { User, AchievementSummary } from "@conference-app/shared-models";
import { HeaderComponent } from "@conference-app/header";

@Component({
  standalone: true,
  imports: [HeaderComponent],
  selector: 'conference-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'example-header';

  public userInfo: User = {id: 10, name: "John Doe", profileImage: "https://picsum.photos/150/150"};
  public summaryInfo: AchievementSummary = {completed: 2, uncompleted: 3, total: 5};
}
