import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SubmitAchievement } from '@conference-app/shared-models';
import { AchievementFormService } from '../../api/achievement-form.service';
import { StyledContainerComponent } from '@conference-app/shared-UI';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievement-form',
  standalone: true,
  templateUrl: 'achievement-form.component.html',
  styleUrl: 'achievement-form.component.scss',
  imports: [StyledContainerComponent, CommonModule, FormsModule]
})
export class AchievementFormComponent {
  public title: string = '';
  public number: number = 0;
  public styleType: number = 0;

  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  constructor(private achievementFormService: AchievementFormService) {}

  async handleSubmit(form: NgForm) {
    if (form.valid) {
      const achievement: SubmitAchievement = {
        title: this.title,
        goal: this.number,
        styleType: this.styleType,
      };

      await this.achievementFormService.submitAchievement(achievement);
      this.onClose.emit();
    }
  }

  handleCancel(): void {
    this.onClose.emit();
  }
}
