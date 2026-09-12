import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Stat } from '../../../domain/models/stat.model';
import { CountUpComponent } from '../count-up/count-up.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [CountUpComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stats-section.component.html',
})
export class StatsSectionComponent {
  @Input({ required: true }) stats: readonly Stat[] = [];
}
