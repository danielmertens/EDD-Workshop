import { Component, Input } from '@angular/core';
import { AchievementSummary, User } from '@conference-app/shared-models';
import { ProfileComponent } from './profile/profile.component';
import { ProgressGraphComponent } from './progress-graph/progress-graph.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: "./header.component.scss",
  standalone: true,
  imports: [ProfileComponent, ProgressGraphComponent]
})
export class HeaderComponent {
  @Input() user!: User;
  @Input() achievementSummary!: AchievementSummary;
}