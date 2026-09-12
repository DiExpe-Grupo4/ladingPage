import { LOCALE_ID, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeEsPe from '@angular/common/locales/es-PE';

import { routes } from './app.routes';
import { LandingContentRepository } from './landing/domain/repositories/landing-content.repository';
import { InMemoryLandingContentRepository } from './landing/infrastructure/repositories/in-memory-landing-content.repository';

registerLocaleData(localeEsPe);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
    ),
    { provide: LOCALE_ID, useValue: 'es-PE' },
    // Inversión de dependencias: el dominio define el puerto
    // (LandingContentRepository), la infraestructura lo implementa.
    { provide: LandingContentRepository, useClass: InMemoryLandingContentRepository },
  ],
};
