import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { Tache } from '../../models/tache';
import { Priorite } from '../../enums/priorite';

@Directive({
  selector: '[appTacheItemDirective]'
})

export class TacheItemDirective {

  @Input()
  set appTacheItemDirective(tache: Tache) {
    switch (tache.priorite) {
      case Priorite.BASSE:
        this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightgreen');
        break;
      case Priorite.NORMALE:
        this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightyellow');
        break;
      case Priorite.ELEVEE:
        this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightcoral');
        break;
      case Priorite.PRIORITAIRE:
        this.renderer.setStyle(this.el.nativeElement, 'background-color', '#B22222');
        break;
      case Priorite.CRITIQUE:
        this.renderer.setStyle(this.el.nativeElement, 'background-color', '#8B0000');
        break;
      default:
        break;
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
