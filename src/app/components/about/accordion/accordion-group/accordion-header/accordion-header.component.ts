import { Component, ChangeDetectionStrategy, Input, HostBinding, ElementRef, ChangeDetectorRef, OnInit } from '@angular/core';

import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-accordion-header',
  template: `
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'accordionHeader'
})
export class AccordionHeaderComponent implements OnInit {
  click$ = fromEvent(this.host.nativeElement, 'click');
  _isOpen = false;

  @Input()
  @HostBinding('class.accordion-open')
  set isOpen(value: boolean) {
    if (this.isOpen !== value) {
      this._isOpen = value;
      this.cdr.markForCheck();
    }
  }

  get isOpen() {
    return this._isOpen;
  }

  constructor(private host: ElementRef,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log('header init');
  }
}
