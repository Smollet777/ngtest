import { AfterContentInit, Component, ChangeDetectionStrategy, ContentChildren, QueryList, OnDestroy } from '@angular/core';

import { mapTo, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { merge, Subject, Observable } from 'rxjs';

import { AccordionGroupComponent } from './accordion-group/accordion-group.component';

@Component({
  selector: 'app-accordion',
  template: `
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(AccordionGroupComponent)
  groups: QueryList<AccordionGroupComponent>;

  private readonly unsubscribe$ = new Subject<void>();

  ngAfterContentInit() {
    this.groups.changes.pipe(
      startWith(this.groups),
      switchMap(groups => {

        // collection of observables
        const headerClicks$ = groups.map((group: AccordionGroupComponent) => group.header.click$
          .pipe(mapTo(group)));

        return merge(...headerClicks$);
      }),
      takeUntil(this.unsubscribe$)
    )
      .subscribe((group: AccordionGroupComponent) => {
        group.toggle();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
