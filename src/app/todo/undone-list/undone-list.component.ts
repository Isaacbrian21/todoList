import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-undone-list',
  templateUrl: './undone-list.component.html',
  styleUrls: ['./undone-list.component.scss']
})
export class UndoneListComponent implements OnInit {

  @Input() todoList!: Todo[];

  constructor() { }

  ngOnInit(): void {
  }
deleteTask(todo: Todo){
  let pergunta =  confirm('Tem certeza que deseja apagar esta tarefa ?')
  if(pergunta == true) {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
    alert('Tarefa apagada com sucesso')
  }else{
    alert('Tarefa não apagada')
  }
}
}


