import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LandingContentService } from '../../../application/services/landing-content.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { StatsSectionComponent } from '../../components/stats-section/stats-section.component';
import { FeaturesSectionComponent } from '../../components/features-section/features-section.component';
import { HowItWorksSectionComponent } from '../../components/how-it-works-section/how-it-works-section.component';
import { FinalCtaSectionComponent } from '../../components/final-cta-section/final-cta-section.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    StatsSectionComponent,
    FeaturesSectionComponent,
    HowItWorksSectionComponent,
    FinalCtaSectionComponent,
    FooterComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
  private readonly contentService = inject(LandingContentService);

  protected readonly content = this.contentService.getLandingContent();
}
