import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {CategoryService} from '../category.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$;
  categories$;
  category: string;

  constructor(route: ActivatedRoute, productService: ProductService, categoryService: CategoryService) {
    this.products$ = productService.getAll();
    this.categories$ = categoryService.getCategories();

    route.queryParamMap.subscribe(params => {
       this.category = params.get('category');
      });
  }

  ngOnInit() {
  }

}
