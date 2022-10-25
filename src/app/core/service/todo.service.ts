import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiTodo = 'http://localhost:3000'
  
 constructor(private http: HttpClient) { }


  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiTodo}/todo`)
  }


  postTodo(todo: Todo):Observable<Todo> {
    return this.http.post<Todo>(`${this.apiTodo}`, todo)
  }


  UpdateTodo(todo: Todo, id: number):Observable<Todo>{
    return this.http.put<Todo>(`${this.apiTodo}/${id}`, todo)
  }


  deleteTodo(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiTodo}/${id}`)
  }
}
