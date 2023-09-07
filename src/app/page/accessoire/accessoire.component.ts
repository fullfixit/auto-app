import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoService } from 'src/app/auto.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HotelsComponent } from 'src/app/header-nav/hotels/hotels.component';
import { TextCounterComponent } from '../text-counter/text-counter.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-accessoire',
  standalone: true,
  imports: [CommonModule,
    RouterModule,
    HotelsComponent,
    TextCounterComponent,
    StarRatingComponent
  ],
  templateUrl: './accessoire.component.html',
  styleUrls: ['./accessoire.component.css']
})
export class AccessoireComponent{

}
