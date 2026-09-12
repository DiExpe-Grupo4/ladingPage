import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NavItem } from '../../../domain/models/nav-item.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input({ required: true }) nav: readonly NavItem[] = [];

  protected readonly year = new Date().getFullYear();
}
