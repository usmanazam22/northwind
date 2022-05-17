import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICategory } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {
  title = 'category';
  categoryForm!: FormGroup;
  sub!: Subscription;
  errorMessage = '';
  categories: ICategory[] = [];

  constructor(private categoryService: CategoryService, private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    /*this.categoryForm = this.fb.group({
      categoryId: null,
      categoryName: '',
      description: ''
    })*/

    this.categoryService.getCategories().subscribe({
      next: categories =>  this.categories = categories,
      error: err => this.errorMessage = err
    });

    /*     this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      }, */
      //error: err => this.errorMessage = err
    //});
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
