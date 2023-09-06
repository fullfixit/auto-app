import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pays } from './page/countries/countries.component';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private apiKey = 'bfe5d944cb34a7c0efb81a1b5c50e961';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  private apiUrl1 = 'https://restcountries.com/v3.1/all'

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Pays[]>{
    return this.http.get<Pays[]>(this.apiUrl1);
  }

  public getWeather(countries: string): Observable<any> {
    const url = `${this.apiUrl}?q=${countries}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
