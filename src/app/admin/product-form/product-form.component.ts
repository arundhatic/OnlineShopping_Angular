import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category.service';
import {ProductService} from '../../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  flag: boolean;
  product = {
    /*
    item: <string> null,
    price: <number> null,
    category: <string> null,
    imageUrl: <string> null
    */
  }; /* for new product, assign to empty else get a null pointer exception */

  productId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService)   {
    this.categories$ = categoryService.getCategories();
    this.flag = true;
    this.productId = this.route.snapshot.paramMap.get('id');

    if (this.productId) {
      this.productService.getAll().subscribe(p => {
        for (let i = 0; i < p.length; i ++){
          if (Number(this.productId) === p[i]['id']) {
            this.product = p[i];
            break;
          }else if(this.productId === p[i]['id']) {
            this.product = p[i];
            break;
          }
        }
      });
    }

  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
    console.log(product.valueOf());
  }

  ngOnInit() {
  }
}
