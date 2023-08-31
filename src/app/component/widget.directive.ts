import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    standalone: true,
    selector: '[appWidgetAnimation]'
})
export class WidgetAnimationDirective {
  private isClicked = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.isClicked = !this.isClicked;
    if (this.isClicked) {
      this.renderer.addClass(this.el.nativeElement, 'widget-animation-clicked');
      setTimeout(() => {
        this.resetClickState();
      }, 200);
    }
  }

  private resetClickState() {
    this.isClicked = false;
    this.renderer.removeClass(this.el.nativeElement, 'widget-animation-clicked');
  }
}
