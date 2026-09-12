import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type IconType =
  | 'fingerprint'
  | 'siren'
  | 'satellite'
  | 'users'
  | 'bell'
  | 'headset'
  | 'arrow-right'
  | 'menu'
  | 'radio'
  | 'bus'
  | 'shield-check';

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.viewBox]="'0 0 24 24'"
      [attr.width]="size"
      [attr.height]="size"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      @switch (name) {
        @case ('fingerprint') {
          <path
            d="M12 3a7 7 0 0 0-7 7c0 2.4.5 4.2 1.2 5.6M12 3a7 7 0 0 1 7 7c0 1.1-.1 2-.3 2.8M9 20.5c.4-1 .6-2 .7-3M12 3c-3 0-5.5 2.5-5.5 5.5 0 2.7.3 4.9 1 6.6M12 3c3 0 5.5 2.5 5.5 5.5 0 3.7-.7 6.4-1.7 8.3M9.5 16c.7-1.5 1-3 1-4.5a1.5 1.5 0 1 1 3 0c0 3-1 5.5-2.3 7.5"
          />
        }
        @case ('siren') {
          <path d="M7 18v-6a5 5 0 0 1 10 0v6" />
          <path d="M5 21a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2H5Z" />
          <path d="M12 2v2M4.2 7.2 5.6 8.6M19.8 7.2l-1.4 1.4" />
        }
        @case ('satellite') {
          <path d="m13 7 5 5-8 8-5-5 8-8Z" />
          <path d="m7 13-3 3 4 4 3-3" />
          <path d="M17 3a2.83 2.83 0 0 1 4 4l-1.5 1.5-4-4Z" />
          <path d="M4 21 2.5 19.5" />
        }
        @case ('users') {
          <circle cx="9" cy="7" r="4" />
          <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
          <circle cx="17" cy="7" r="3" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        }
        @case ('bell') {
          <path d="M6 8a6 6 0 0 1 12 0c0 5.2 1.6 7.2 2.3 8H3.7c.7-.8 2.3-2.8 2.3-8Z" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        }
        @case ('headset') {
          <path d="M4 17v-5a8 8 0 0 1 16 0v5" />
          <rect x="2" y="15" width="4" height="6" rx="1.5" />
          <rect x="18" y="15" width="4" height="6" rx="1.5" />
          <path d="M20 21a2 2 0 0 1-2 2h-2" />
        }
        @case ('arrow-right') {
          <path d="M5 12h14M13 5l7 7-7 7" />
        }
        @case ('menu') {
          <path d="M4 6h16M4 12h16M4 18h16" />
        }
        @case ('radio') {
          <circle cx="12" cy="12" r="2" />
          <path
            d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 7.76a6 6 0 0 0 0 8.49M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"
          />
        }
        @case ('bus') {
          <rect x="3" y="5" width="18" height="12" rx="3" />
          <path d="M3 10.5h18" />
          <path d="M7 5V3M17 5V3" />
          <circle cx="7.5" cy="19.5" r="1.5" />
          <circle cx="16.5" cy="19.5" r="1.5" />
        }
        @case ('shield-check') {
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <path d="m9 12 2 2 4-4" />
        }
      }
    </svg>
  `,
})
export class IconComponent {
  @Input({ required: true }) name!: IconType;
  @Input() size = 24;
  @Input() strokeWidth = 1.75;
}
