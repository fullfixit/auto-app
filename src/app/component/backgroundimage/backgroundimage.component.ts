import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-backgroundimage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backgroundimage.component.html',
  styleUrls: ['./backgroundimage.component.css'],
  changeDetection :ChangeDetectionStrategy.OnPush,
})
export class BackgroundimageComponent {
  @Input() imageName: string = '';
  @Output() imageClicked = new EventEmitter<string>();

  onImageClick() {
    this.imageClicked.emit(this.imageName);
  }
}
