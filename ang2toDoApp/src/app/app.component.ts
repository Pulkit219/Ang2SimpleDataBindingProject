import { Component } from '@angular/core';
import {TodoService  } from './todo.service';
import { TodosComponent } from './todos/todos.component';

@Component({
  moduleId:module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'app works!';
}
