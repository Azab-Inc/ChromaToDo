import { Injectable } from '@angular/core';
import { ChromeService } from './chrome.service';
import { Todo } from '../interfaces/todo';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(chromeService: ChromeService) {}

  getAllTodos(): Todo[] {
    return [];
  }

  getTodos(category: Category): Todo[] {
    return [];
  }

  addTodo(todo: Todo): void {}

  editTodo(todo: Todo): void {}

  deleteTodo(todo: Todo): void {}
}
