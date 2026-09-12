import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-final-cta-section',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './final-cta-section.component.html',
})
export class FinalCtaSectionComponent {
  @Input({ required: true }) contactEmail = '';
}
