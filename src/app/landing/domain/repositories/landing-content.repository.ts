import { LandingContent } from '../models/landing-content.model';

/**
 * Puerto (contrato) que define cómo se obtiene el contenido de la landing,
 * sin acoplarse a una fuente concreta (JSON local, CMS, API, etc.).
 * La capa de infraestructura provee la implementación real.
 */
export abstract class LandingContentRepository {
  abstract getContent(): LandingContent;
}
