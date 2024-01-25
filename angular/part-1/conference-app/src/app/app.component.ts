import { Component, OnInit } from '@angular/core';
import { AppService } from '../api/app.service';
import { AppData } from '../api/models';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { AchievementGridComponent } from '../achievement-grid/achievement-grid.component';

@Component({
  selector: 'conference-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [HeaderComponent, AchievementGridComponent, CommonModule]
})
export class AppComponent implements OnInit {
  title = 'Conference App';
  public appData: AppData | null = null;

  constructor(private appService: AppService) {}

  async ngOnInit() {
    this.appData = await this.appService.fetchAppData();
  }

  async reload() {
    this.appData = await this.appService.fetchAppData();
  }
}
