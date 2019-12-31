import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appAccordionContentLazy]'
})
export class AccordionContentLazyDirective {
  constructor(public content: TemplateRef<any>) { }
}
