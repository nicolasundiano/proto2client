import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../shared/models/product-models/product";
import {ShopService} from "../shop.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;

  constructor(private shopService: ShopService, private activatedRoot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.shopService.getProduct(+this.activatedRoot.snapshot.paramMap.get('id')).subscribe({
      next: response => this.product = response.product,
      error: err => console.log(err)
    });
  }
}
