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
  @Input() MeteoData: any;

  constructor(private autoService: AutoService){}

  ngOnInit(){
    this.getMeteoData();
  }

  getMeteoData() {
    const countries = 'Poland'
    this.autoService.getWeather(countries).subscribe(
    {
      next:response=>this.MeteoData = response,
      error:error=>console.log(error),
    }
    )
  }
}
