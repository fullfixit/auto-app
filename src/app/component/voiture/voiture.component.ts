import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voiture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
  @ViewChild('voitureVid')
  private voitureVid!: ElementRef;

  ngAfterViewInit() {
    const videoElement = this.voitureVid.nativeElement as HTMLVideoElement;

    videoElement.addEventListener('mouseenter', () => {
      videoElement.play();
    });

    videoElement.addEventListener('mouseleave', () => {
      videoElement.pause();
    });
  }
}
