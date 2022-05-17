import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product-data';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    InMemoryWebApiModule.forRoot(ProductData),
    RouterModule.forChild([
      {path: 'products', component: ProductComponent}      
    ])
  ]
})

export class ProductModule { }
