import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing/presentation/pages/landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent,
      ),
    title: 'Avisum | Protección táctica para buses de Lima',
  },
  { path: '**', redirectTo: '' },
];
