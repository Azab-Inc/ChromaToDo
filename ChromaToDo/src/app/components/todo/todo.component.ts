import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input() todo: Todo | null = null;

  constructor(private todoService: TodoService) {}

  deleteSelf(): void {
    if (this.todo != null) {
      this.todoService.deleteTodo(this.todo);
      alert(`Deleted ${this.todo.title}`);
    }
  }
}
