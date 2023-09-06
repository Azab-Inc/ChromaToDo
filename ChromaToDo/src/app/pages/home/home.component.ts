import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  todos: Todo[] | null = null;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getAllTodos();
  }
}
