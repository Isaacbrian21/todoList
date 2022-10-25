import { Component, OnInit } from '@angular/core';
import { Done } from 'src/app/core/models/done.model';
import { Todo } from 'src/app/core/models/Todo.model';
import { AnimateService } from 'src/app/core/service/animate.service';
import { DoneService } from 'src/app/core/service/done.service';
import { TodoService } from 'src/app/core/service/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos: Todo[] = []
  dones: Done[] = []
  constructor(private todoS: TodoService, private animate: AnimateService, private doneS: DoneService) { }

  ngOnInit(): void {
    this.getTodo();
    this.getDone();
  }

  getTodo(): void {
    this.todoS.getTodos().subscribe((todos) => {
      this.todos = todos;
      console.log(todos);
      setTimeout(() => {
        this.animate.requestEnded();
      }, 3000)
      this.animate.requestStarted();
    });
  }

  getDone():void{
    this.doneS.getDones().subscribe((dones) => {
      this.dones = dones;
      console.log(dones);
      setTimeout(() => {
        this.animate.requestEnded();
      }, 3000)
      this.animate.requestStarted();
    });
  }

}
