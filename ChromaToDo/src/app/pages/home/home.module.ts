import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TodoComponent } from 'src/app/components/todo/todo.component';
import { AddTodoComponent } from 'src/app/components/add-todo/add-todo.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, TodoComponent, AddTodoComponent],
})
export class HomeModule {}
