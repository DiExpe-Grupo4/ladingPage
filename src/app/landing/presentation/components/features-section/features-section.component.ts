import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Feature } from '../../../domain/models/feature.model';
import { IconComponent } from '../icon/icon.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [IconComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './features-section.component.html',
})
export class FeaturesSectionComponent {
  @Input({ required: true }) features: readonly Feature[] = [];
}
