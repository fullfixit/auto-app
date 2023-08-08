import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://any.ge/horoscope/api/?sign=aquarius&type=daily&day=today&lang=en';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
