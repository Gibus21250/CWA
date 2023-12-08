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
        this.renderer.setStyle(this.el.nativeElement, 'background-color', '#ffffff38');
        break;
      case Priorite.NORMALE:
        this.renderer.setStyle(this.el.nativeElement, 'background-color', '#64ff7138');
        break;
      case Priorite.ELEVEE:
        this.renderer.setStyle(this.el.nativeElement, 'background-color', '#ffc65438');
        break;
      case Priorite.PRIORITAIRE:
        this.renderer.setStyle(this.el.nativeElement, 'background-color', '#ff613e38');
        break;
      case Priorite.CRITIQUE:
        this.renderer.setStyle(this.el.nativeElement, 'background-color', '#ff242438');
        break;
      default:
        break;
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}

/*
case Priorite.BASSE:
  this.renderer.setStyle(this.el.nativeElement, 'background-color', '#ffffff38');
  break;
case Priorite.NORMALE:
  this.renderer.setStyle(this.el.nativeElement, 'background-color', '#7b9cff3c');
  break;
case Priorite.ELEVEE:
  this.renderer.setStyle(this.el.nativeElement, 'background-color', '#5c46ff3c');
  break;
case Priorite.PRIORITAIRE:
  this.renderer.setStyle(this.el.nativeElement, 'background-color', '#c130ff3c');
  break;
case Priorite.CRITIQUE:
  this.renderer.setStyle(this.el.nativeElement, 'background-color', '#ff3bf540');
  break;
default:
  break;
*/