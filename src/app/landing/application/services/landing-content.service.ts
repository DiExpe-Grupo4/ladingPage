import { Injectable } from '@angular/core';

import { LandingContent } from '../../domain/models/landing-content.model';
import { LandingContentRepository } from '../../domain/repositories/landing-content.repository';

/**
 * Servicio de aplicación (caso de uso): expone el contenido de la landing
 * a la capa de presentación. Depende únicamente del puerto de dominio
 * (LandingContentRepository) — nunca de una implementación concreta —
 * respetando la regla de dependencia de DDD (application -> domain).
 */
@Injectable({ providedIn: 'root' })
export class LandingContentService {
  constructor(private readonly repository: LandingContentRepository) {}

  getLandingContent(): LandingContent {
    return this.repository.getContent();
  }
}
