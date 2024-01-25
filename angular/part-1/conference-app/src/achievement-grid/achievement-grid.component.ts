import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { AchievementFormComponent } from '../achievement-form/achievement-form.component';
import { AchievementComponent } from './achievement/achievement.component';
import { AchievementData } from '../api/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievement-grid',
  templateUrl: './achievement-grid.component.html',
  styleUrl: './achievement-grid.component.scss',
  standalone: true,
  imports: [ModalComponent, AchievementFormComponent, AchievementComponent, CommonModule]
})
export class AchievementGridComponent implements OnInit, OnChanges {
  @Input() achievements: AchievementData[] = [];
  @Output() reloadData: EventEmitter<void> = new EventEmitter<void>();

  isOpen = false;
  filter = 'All';
  filteredAchievements: AchievementData[] = [];

  ngOnInit() {
    this.loadGrid();
  }

  ngOnChanges() {
    this.loadGrid();
  }

  loadGrid() {
    if (this.filter === 'All') {
      this.filteredAchievements = this.achievements;
    } else if (this.filter === 'Completed') {
      this.filteredAchievements = this.achievements.filter(achievement => achievement.status === 'completed');
    } else if (this.filter === 'Uncompleted') {
      this.filteredAchievements = this.achievements.filter(achievement => achievement.status === 'uncompleted');
    }
  }

  openAddAchievementForm() {
    this.isOpen = true;
  }

  closeAddAchievementForm() {
    this.isOpen = false;
    this.reloadData.emit();
  }

  filterChanged(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.filter = target.value;
    this.loadGrid();
  }
}
