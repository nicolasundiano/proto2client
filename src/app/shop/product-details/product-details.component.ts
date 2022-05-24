import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../shared/models/product-models/product";
import {ShopService} from "../shop.service";
import {ActivatedRoute} from "@angular/router";
import {BreadcrumbService} from "xng-breadcrumb";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;

  constructor(private shopService: ShopService, private activatedRoot: ActivatedRoute,
              private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.set('@productDetails', ' ');
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.shopService.getProduct(+this.activatedRoot.snapshot.paramMap.get('id')).subscribe({
      next: response => {
        this.product = response.product;
        this.breadcrumbService.set('@productDetails', this.product.name);
      },
      error: err => console.log(err)
    });
  }
}
