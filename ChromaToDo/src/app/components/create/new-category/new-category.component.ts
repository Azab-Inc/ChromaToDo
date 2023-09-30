import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-new-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-category.component.html',
  styles: [],
})
export class NewCategoryComponent {
  constructor(private categoryService: CategoryService) {}

  newCategory: Category = {};

  async addCategory() {
    if (this.newCategory.name != '' && this.newCategory.name != undefined) {
      await this.categoryService.addCategory(this.newCategory);
      this.categoryService.notifyCategoryAdded();
      this.newCategory.name = '';
    } else {
      alert('Please give the new category a name.');
    }
  }
}
