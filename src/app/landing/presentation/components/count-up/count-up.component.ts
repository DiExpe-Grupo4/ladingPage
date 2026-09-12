import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  inject,
  signal,
} from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-count-up',
  standalone: true,
  imports: [DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `{{ value() | number: format }}{{ suffix }}`,
})
export class CountUpComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) to = 0;
  @Input() suffix = '';
  @Input() duration = 1600;

  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private started = false;
  private rafId?: number;

  // Signal en vez de propiedad plana: con OnPush, un valor mutado dentro de
  // requestAnimationFrame (fuera de un evento de plantilla) NO repinta la
  // vista si es una propiedad normal. Un signal sí notifica a Angular.
  protected readonly value = signal(0);

  get format(): string {
    const decimals = this.to % 1 !== 0 ? 1 : 0;
    return `1.${decimals}-${decimals}`;
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || this.started) return;
        this.started = true;
        this.animate();
      },
      { threshold: 0.3, rootMargin: '0px 0px -40px 0px' },
    );
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  private animate(): void {
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / this.duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      this.value.set(this.to * eased);
      if (p < 1) {
        this.rafId = requestAnimationFrame(tick);
      }
    };
    this.rafId = requestAnimationFrame(tick);
  }
}
