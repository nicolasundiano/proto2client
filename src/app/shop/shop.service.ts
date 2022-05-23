import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IProductListPaged} from "../shared/models/product-models/product-list-paged";
import {IProductBrandList} from "../shared/models/product-brand-models/product-brand-list";
import {IProductTypeList} from "../shared/models/product-type-models/product-type-list";
import {map} from "rxjs";
import {ProductListPagedParams} from "../shared/models/product-models/product-list-paged-params";
import {IProductIndividual} from "../shared/models/product-models/product-individual";

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

    return this.http.get<IProductListPaged>(this.baseUrl + 'products', {observe: 'response', params})
      .pipe(map(response => {
        return response.body;
      }));
  }

  getProduct(id: number) {
    return this.http.get<IProductIndividual>(this.baseUrl + 'products/' + id);
  }

  getProductBrands() {
    return this.http.get<IProductBrandList>(this.baseUrl + 'product-brands')
  }

  getProductTypes() {
    return this.http.get<IProductTypeList>(this.baseUrl + 'product-types')
  }
}
