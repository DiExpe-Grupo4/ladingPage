import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MonitorMetric } from '../../../domain/models/monitor-metric.model';
import { IconComponent } from '../icon/icon.component';
import { MonitorMockupComponent } from '../monitor-mockup/monitor-mockup.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [IconComponent, MonitorMockupComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  @Input({ required: true }) monitorMetrics: readonly MonitorMetric[] = [];
}
