import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AutoService } from 'src/app/auto.service';

interface Pays {
  name:{
    common: string
  }
  capital: string;
  population: number;
  flags:{
    svg: string;
  },
  maps:{
    googleMaps: string;
  }
}

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule,
    RouterModule
  ],
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent {
  countries: Pays[] = [];

  constructor(private autoService: AutoService, private route: ActivatedRoute){}

  ngOnInit() {
    this.autoService.getCountries().subscribe((data: Pays[]) => {
      this.countries = data.slice(0, 21);
    });
  }
}


