import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-harley',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './harley.component.html',
  styleUrls: ['./harley.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HarleyComponent {
  
}
