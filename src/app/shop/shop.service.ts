import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs";
import {IProductBrandListResponse} from "../shared/models/product-brand-models/product-brand";
import {IProductTypeListResponse} from "../shared/models/product-type-models/product-type";
import {IProductResponse, IProductListPagedResponse, ProductListPagedParams} from "../shared/models/product-models/product";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) {
  }

  getProducts(productParams: ProductListPagedParams) {
    let params = new HttpParams();

    if (productParams.brandId !== 0) {
      params = params.append('brandId', productParams.brandId.toString())
    }
    if (productParams.typeId !== 0) {
      params = params.append('typeId', productParams.typeId.toString())
    }

    params = params.append('sort', productParams.sort);

    params = params.append('pageIndex', productParams.pageIndex.toString());

    params = params.append('pageSize', productParams.pageSize.toString());

    if (productParams.search){
      params = params.append('search', productParams.search);
    }

    return this.http.get<IProductListPagedResponse>(this.baseUrl + 'products', {observe: 'response', params})
      .pipe(map(response => {
        return response.body;
      }));
  }

  getProduct(id: number) {
    return this.http.get<IProductResponse>(this.baseUrl + 'products/' + id);
  }

  getProductBrands() {
    return this.http.get<IProductBrandListResponse>(this.baseUrl + 'product-brands')
  }

  getProductTypes() {
    return this.http.get<IProductTypeListResponse>(this.baseUrl + 'product-types')
  }
}
