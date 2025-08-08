import { Injectable } from '@angular/core';
import { Todo } from '../model/todos.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems: Array<Todo> = [
    {
      title: 'groceries',
      id: 0,
      completed: false,
      userId: 1,
    },
    {
      title: 'car wash',
      id: 1,
      completed: false,
      userId: 1,
    },
  ];
}
