import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private productsServices: ProductsService) { }

  ngOnInit() {
    this.products = this.productsServices.getProducts();
    console.log(this.products);
  }

}
