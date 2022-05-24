import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IProduct} from "../shared/models/product-models/product";
import {ShopService} from "./shop.service";
import {IProductBrand} from "../shared/models/product-brand-models/product-brand";
import {IProductType} from "../shared/models/product-type-models/product-type";
import {ProductListPagedParams} from "../shared/models/product-models/product-list-paged-params";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @ViewChild('search', {static: false}) search: ElementRef
  products: IProduct[];
  productBrands: IProductBrand[];
  productTypes: IProductType[];
  productParams = new ProductListPagedParams();
  totalCount: number;

  sortOptions = [
    {name: 'Alphabetical', value: 'nameAsc'},
    {name: 'Price: Low to High', value: 'priceAsc'},
    {name: 'Price: High to Low', value: 'priceDesc'},
  ]

  constructor(private shopService: ShopService) {
  }

  ngOnInit(): void {
    this.getProducts();
    this.getProductBrands();
    this.getProductTypes();
  }

  getProducts() {
    this.shopService.getProducts(this.productParams).subscribe({
      next: response => {
        this.products = response.data;
        this.productParams.pageIndex = response.pageIndex;
        this.productParams.pageSize = response.pageSize;
        this.totalCount = response.count;
      },
      error: err => console.log(err)
    });
  }

  getProductBrands() {
    this.shopService.getProductBrands().subscribe({
      next: response => this.productBrands = [{id: 0, name: 'All'}, ...response.productBrands],
      error: err => console.log(err)
    });
  }

  getProductTypes() {
    this.shopService.getProductTypes().subscribe({
      next: response => this.productTypes = [{id: 0, name: 'All'}, ...response.productTypes],
      error: err => console.log(err)
    });
  }

  onBrandSelected(brandId: number) {
    this.productParams.brandId = brandId;
    this.productParams.pageIndex = 1;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.productParams.typeId = typeId;
    this.productParams.pageIndex = 1;
    this.getProducts();
  }

  onSortSelected(sort: string) {
    this.productParams.sort = sort;
    this.getProducts();
  }

  onPageChanged(event: any) {
    if (this.productParams.pageIndex !== event){
      this.productParams.pageIndex = event;
      this.getProducts();
    }
  }

  onSearch() {
    this.productParams.search = this.search.nativeElement.value;
    this.getProducts();
  }

  onReset() {
    this.search.nativeElement.value = '';
    this.productParams = new ProductListPagedParams();
    this.getProducts();
  }
}
