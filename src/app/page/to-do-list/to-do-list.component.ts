import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { List } from './list.model';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
  ],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  liste: List[] = [];
  newTask: string = '';
  isListDisabled: boolean = false;

  ngOnInit(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.liste = JSON.parse(storedTasks);
    }
  }

  addTask() {
    if (this.newTask.trim() === '') {
      return; 
    }

    const newTask = new List(this.liste.length + 1, this.newTask, false);
    this.liste.push(newTask);
    this.saveTasksToLocalStorage();
    this.newTask = '';
  }

  deleteList(list: List) {
    const index = this.liste.indexOf(list);
    if (index !== -1) {
      this.liste.splice(index, 1);
      this.saveTasksToLocalStorage();
    }
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.liste));
  }

  toggleList(list: List) {
    list.isListDisabled = !list.isListDisabled;
  }


}
