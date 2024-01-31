import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import '@ov-site/design-system/atoms/button/Button';

@Component({
  selector: 'app-lazy',
  standalone: true,
  imports: [],
  templateUrl: './lazy.component.html',
  styleUrl: './lazy.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LazyComponent {}
