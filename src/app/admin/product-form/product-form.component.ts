import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category.service';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;

  constructor(categoryService: CategoryService, private productService: ProductService) {
    this.categories$ = categoryService.getCategories();
    console.log('this.catagories = ' + this.categories$);
  }

  save(product) {
    this.productService.create(product);
    console.log(product.valueOf());
  }

  ngOnInit() {
  }

}
