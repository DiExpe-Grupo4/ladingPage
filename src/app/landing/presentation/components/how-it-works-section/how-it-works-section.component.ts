import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

import { ProcessStep } from '../../../domain/models/process-step.model';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-how-it-works-section',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './how-it-works-section.component.html',
})
export class HowItWorksSectionComponent {
  @Input({ required: true }) steps: readonly ProcessStep[] = [];

  protected readonly active = signal(0);

  setActive(index: number): void {
    this.active.set(index);
  }
}
