import { Component, Input } from '@angular/core';
import { User } from '@conference-app/shared-models';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  @Input() user!: User;
}
