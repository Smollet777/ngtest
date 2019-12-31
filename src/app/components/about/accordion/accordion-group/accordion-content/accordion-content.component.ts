import { ChangeDetectorRef, Input, ChangeDetectionStrategy, Component, ContentChild, OnInit } from '@angular/core';

import { AccordionContentLazyDirective } from '../../accordion-content-lazy.directive';

@Component({
  selector: 'app-accordion-content',
  template: `
    <div *ngIf="isOpen">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionContentComponent implements OnInit {
  _isOpen = false;

  @Input()
  set isOpen(value: boolean) {
    if (this._isOpen !== value) {
      this._isOpen = value;
      this.cdr.markForCheck();
    }
  }

  get isOpen() {
    return this._isOpen;
  }

  constructor(private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    console.log('content init');
  }
}
