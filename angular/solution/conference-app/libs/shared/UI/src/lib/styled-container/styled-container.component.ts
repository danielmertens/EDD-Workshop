import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-styled-container',
  standalone: true,
  templateUrl: './styled-container.component.html',
  styleUrl: './styled-container.component.scss'
})
export class StyledContainerComponent {
  @Input() styleType!: number;
  @Input() borderRadius?: number;
}
