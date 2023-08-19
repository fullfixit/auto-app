import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule],
  template: `<img [src]="imageUrl" (click)="onImageClick()">`,
  changeDetection :ChangeDetectionStrategy.OnPush
})

export class WidgetComponent {
  @Input() imageUrl: string = '';

  @Output() imageClick = new EventEmitter<string>();

  onImageClick() {
    this.imageClick.emit(this.imageUrl);
  }
}
