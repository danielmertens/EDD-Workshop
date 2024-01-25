import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StyledContainerComponent } from "@conference-app/shared-UI";

@Component({
  standalone: true,
  imports: [StyledContainerComponent, CommonModule],
  selector: 'conference-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'example-shared-UI';
}
