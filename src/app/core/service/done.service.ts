import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Done } from '../models/done.model';
import { Todo } from '../models/Todo.model';

@Injectable({
  providedIn: 'root'
})
export class DoneService {


  private apiDone = 'http://localhost:3000'
  
 constructor(private http: HttpClient) { }


  getDones(): Observable<Done[]> {
    return this.http.get<Done[]>(`${this.apiDone}/done`)
  }


  postTodo(done: Done):Observable<Todo> {
    return this.http.post<Done>(`${this.apiDone}`, done)
  }


  UpdateTodo(done: Done, id: number):Observable<Todo>{
    return this.http.put<Done>(`${this.apiDone}/${id}`, done)
  }


  deleteTodo(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiDone}/${id}`)
  }
}