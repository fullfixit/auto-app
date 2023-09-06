import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-counter',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
  ],
  templateUrl: './text-counter.component.html',
  styleUrls: ['./text-counter.component.css']
})
export class TextCounterComponent implements OnInit {

  text: string='';

  ngOnInit(){
    this.counter();
  }

  counter () {
    const lettremax = 50;
    const nbrelettre = this.text.length;

    if(lettremax < nbrelettre){
      
    }
  }
}
