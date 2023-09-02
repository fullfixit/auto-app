import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DelayedNavigationService {
  constructor(private router: Router) {}

  navigateWithDelay(url: string, delay: number) {
    setTimeout(() => {
      this.router.navigateByUrl(url);
    }, delay);
  }

  navigateWithDelay1(url: string, delay: number) {
    setTimeout(() => {
      this.router.navigateByUrl(url);
    }, delay);
  }
}
