import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category.service';
import {ProductService} from '../../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories();
    console.log('this.catagories = ' + this.categories$);
  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
    console.log(product.valueOf());
  }

  ngOnInit() {
  }

}
