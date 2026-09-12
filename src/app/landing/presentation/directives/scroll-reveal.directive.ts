import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, inject } from '@angular/core';

/**
 * Revela un elemento con fade + slide-up al entrar al viewport, y lo oculta de
 * nuevo cuando sale (tanto al bajar como al subir), repitiendo el efecto cada
 * vez que el elemento cruza el viewport.
 * Uso: <div appScrollReveal [scrollRevealDelay]="120"> ... </div>
 */
@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() scrollRevealDelay = 0; // ms, para efecto escalonado (stagger)

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const element = this.el.nativeElement;
    this.renderer.addClass(element, 'scroll-reveal');

    if (this.scrollRevealDelay) {
      this.renderer.setStyle(element, 'transition-delay', `${this.scrollRevealDelay}ms`);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          this.renderer.addClass(element, 'reveal-visible');
        } else {
          this.renderer.removeClass(element, 'reveal-visible');
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
