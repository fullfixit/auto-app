import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoitureComponent } from '../voiture/voiture.component';
import { HarleyComponent } from '../harley/harley.component';
import { BoldorComponent } from '../boldor/boldor.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule,
    VoitureComponent,
    HarleyComponent,
    BoldorComponent,
    RouterModule,
  ],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {

}
