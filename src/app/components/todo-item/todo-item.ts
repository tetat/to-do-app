import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todos.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo-directive';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [HighlightCompletedTodoDirective, TitleCasePipe],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked() {
    this.todoToggled.emit(this.todo());
  }
}
