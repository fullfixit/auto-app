import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoService } from 'src/app/auto.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-accessoire',
  standalone: true,
  imports: [CommonModule,
    RouterModule,
  ],
  templateUrl: './accessoire.component.html',
  styleUrls: ['./accessoire.component.css']
})
export class AccessoireComponent{

  
}
