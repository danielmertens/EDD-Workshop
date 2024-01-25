import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StyledContainerComponent } from '../../components/styled-container/styled-container.component';
import { AchievementData } from '../../api/models';
import { CommonModule } from '@angular/common';
import { AchievementGridService } from '../../api/achievement-grid.service';

@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [StyledContainerComponent, CommonModule],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.scss'
})
export class AchievementComponent {
  @Input() achievement!: AchievementData;
  @Output() reloadData: EventEmitter<void> = new EventEmitter<void>();

  constructor(private achievementGridService: AchievementGridService) {}

  async increment() {
    await this.achievementGridService.submitIncrementAchievement(this.achievement.id);
    this.reloadData.emit();
  }
}
