import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoitureComponent } from '../voiture/voiture.component';
import { HarleyComponent } from '../harley/harley.component';
import { BoldorComponent } from '../boldor/boldor.component';
import { Router, RouterModule } from '@angular/router';
import { BackgroundimageComponent } from '../backgroundimage/backgroundimage.component';
import { HeaderComponent } from '../header/header.component';
import { WidgetAnimationDirective } from '../widget.directive';
import { DelayedNavigationService } from 'src/app/delai.service';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule,
    VoitureComponent,
    HarleyComponent,
    BoldorComponent,
    RouterModule,
    BackgroundimageComponent,
    HeaderComponent,
    WidgetAnimationDirective,
  ],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
})

export class WidgetComponent {
  constructor(private delayedNavService: DelayedNavigationService) {}

  navigateWithDelay() {
    this.delayedNavService.navigateWithDelay('/Countries', 500);
  }
}
