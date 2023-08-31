import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voiture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoitureComponent {

}
