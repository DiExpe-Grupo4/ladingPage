import { ChangeDetectionStrategy, Component, HostListener, Input, signal } from '@angular/core';

import { NavItem } from '../../../domain/models/nav-item.model';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input({ required: true }) nav: readonly NavItem[] = [];

  protected readonly scrolled = signal(false);
  protected readonly mobileMenuOpen = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
