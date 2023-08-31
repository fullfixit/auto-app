import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appVolume]'
})
export class VolumeDirective {

  isMuted: boolean = false;
  originalVolume!: number;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('click') onClick() {
    const Element = this.el.nativeElement;
    
    if (!this.isMuted) {
      this.originalVolume = Element.volume;
      Element.volume = 0;
    } else {
      Element.volume = this.originalVolume;
    }

    this.isMuted = !this.isMuted;

    this.renderer.addClass(Element, 'animated');
    setTimeout(() => {
      this.renderer.removeClass(Element, 'animated');
    }, 1200); 
  }

}
