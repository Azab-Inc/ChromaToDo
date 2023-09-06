import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from 'src/app/services/todo.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/category';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-todo.component.html',
  styles: [],
})
export class AddTodoComponent {
  categories: Category[] | null = null;

  constructor(
    private todoService: TodoService,
    private categoryService: CategoryService,
  ) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }

  addTodo(): void {}
}
