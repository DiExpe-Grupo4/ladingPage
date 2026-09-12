import { Feature } from './feature.model';
import { MonitorMetric } from './monitor-metric.model';
import { NavItem } from './nav-item.model';
import { ProcessStep } from './process-step.model';
import { Stat } from './stat.model';

/**
 * Raíz agregada del contenido de la landing page de Avisum.
 * Representa toda la información de negocio que necesita la página
 * para renderizarse, independiente de cómo se obtenga o se muestre.
 */
export interface LandingContent {
  readonly nav: readonly NavItem[];
  readonly stats: readonly Stat[];
  readonly features: readonly Feature[];
  readonly steps: readonly ProcessStep[];
  readonly monitorMetrics: readonly MonitorMetric[];
  readonly contactEmail: string;
}
