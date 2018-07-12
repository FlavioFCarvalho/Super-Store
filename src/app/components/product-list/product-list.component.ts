import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../providers/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  items: any[];
  constructor(public products: ProductsService) { }

  ngOnInit() {
    this.products.list().then((products: any[]) => {
      this.items = products;
    });
  }

}
