import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  todos: Todo[] = [];
  public date  = new Date();
  clearInput= ' ';


  ngOnInit(): void {
  console.log('comoinente pai', this.todos);
  }

  updateTodos(todos: Todo[]){
    this.todos = todos;
    
  }
  
  
  addTodo(text: string): void{
    this.todos.push({
      name: text,
      id: this.todos.length + 1,
      done: false
    })
    this.clearInput= ' ';
  }
}