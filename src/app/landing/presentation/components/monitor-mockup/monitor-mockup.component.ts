import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MonitorMetric } from '../../../domain/models/monitor-metric.model';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-monitor-mockup',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './monitor-mockup.component.html',
})
export class MonitorMockupComponent {
  @Input({ required: true }) metrics: readonly MonitorMetric[] = [];
}
