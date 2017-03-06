import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
   
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todoslist;
text;



  constructor(private _todoService: TodoService) {

  
   }

  ngOnInit() {
     



    this.todoslist =[
{text: 'buy groceries'},
{text: 'prepare meal'},
{text: 'time to code'},

    ];
  }
  addtodo(){
    this.todoslist.push( {text: this.text});
 }

  remove(){
     this.todoslist.pop();
   }
  logit(){
     this._todoService.someMethod();
   }
    

}
