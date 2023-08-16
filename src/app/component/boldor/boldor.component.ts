import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoService } from 'src/app/auto.service';

@Component({
  selector: 'app-boldor',
  standalone: true,
  imports: [CommonModule,
  ],
  templateUrl: './boldor.component.html',
  styleUrls: ['./boldor.component.css']
})
export class BoldorComponent implements OnInit{
  MeteoData:any;

  constructor(private autoService: AutoService){}

  ngOnInit(){
    this.getMeteoData();
  }

  getMeteoData() {
    const countries = 'London'
    this.autoService.getWeather(countries).subscribe(
      (response) =>{
        this.MeteoData = response;
      },
      (error) => {
        console.error('error in fecth dara:', error)
      }
    )
  }
}
