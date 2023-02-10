import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';


@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

  @Input() todoList!: Todo[];
  @Output() emitTodos = new EventEmitter<Todo[]>()

  constructor() { }

  ngOnInit(): void {
  }

  updateTodos(): void{
    this.emitTodos.emit(this.todoList);

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
