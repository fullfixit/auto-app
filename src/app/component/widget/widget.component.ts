import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoitureComponent } from '../voiture/voiture.component';
import { HarleyComponent } from '../harley/harley.component';
import { BoldorComponent } from '../boldor/boldor.component';
import { RouterModule } from '@angular/router';
import { BackgroundimageComponent } from '../backgroundimage/backgroundimage.component';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule,
    VoitureComponent,
    HarleyComponent,
    BoldorComponent,
    RouterModule,
    BackgroundimageComponent,
  ],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
  changeDetection :ChangeDetectionStrategy.OnPush,
})

export class WidgetComponent {
  imageNames = ['beach', 'desert', 'forest'];
  backgroundImageUrl: string = '../../assets/image/beach.jpg';

  onImageClicked(imageName: string) {
    this.backgroundImageUrl = `assets/image/${imageName}.jpg`;
  }
}
