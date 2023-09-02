import { Component, ViewChild, ElementRef, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoService } from 'src/app/auto.service';




@Component({
  selector: 'app-boldor',
  standalone: true,
  imports: [CommonModule,
  ],
  templateUrl: './boldor.component.html',
  styleUrls: ['./boldor.component.css'],
})

export class BoldorComponent implements OnInit{
  MeteoData: any;
  day: string = 'fa-sun';
  night: string = 'fa-moon';

  constructor(private autoService: AutoService){}

  ngOnInit(){
    this.getMeteoData();
  }

  getMeteoData() {
    const countries = 'Maurice'
    this.autoService.getWeather(countries).subscribe(
    {
      next:response=>this.MeteoData = response,
      error:error=>console.log(error),
    }
    )
  }

  isRealTime(): boolean {
    const currentTime = new Date().getTime() * 1000;
    const sunrise = this.MeteoData.sys.sunrise;
    const sunset = this.MeteoData.sys.sunset;
    
    return currentTime > sunrise && currentTime < sunset;
  };

}
