import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todos.type';
import { catchError } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItem],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class TodosComponent implements OnInit{
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoService.getTodosFromApi().pipe(
      catchError(err => {
        console.log(err);
        throw err;
      })
    ).subscribe(todos => {
      this.todoItems.set(todos);
    });
  }

  updateTodoItem(todoItem : Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      });
    });
  }
}
