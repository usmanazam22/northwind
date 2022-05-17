import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product-service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  sub!: Subscription;
  errorMessage = '';
  products: IProduct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err
    })
    /*this.ProductService.getProducts().subscribe({
      next: products =>  th = categories,
      error: err => this.errorMessage = err
    });*/
  }

  /*ngOnDestroy(): void {
    this.sub.unsubscribe();
  }*/
}
