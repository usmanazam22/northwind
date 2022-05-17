import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CategoryData } from './category-data';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    InMemoryWebApiModule.forRoot(CategoryData),
    RouterModule.forChild([
      {path: 'category', component: CategoryComponent}
    ])
  ]
})

export class CategoryModule { }
