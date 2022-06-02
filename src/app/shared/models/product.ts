export interface IProductListPagedResponse {
  pageIndex: number;
  pageSize: number;
  count: number;
  pageCount: number;
  data: IProduct[];
}

export interface IProductResponse {
  product: IProduct
}

export class ProductListPagedParams {
  search: string;
  brandId: number = 0;
  typeId: number = 0;
  sort = 'nameAsc';
  pageIndex = 1;
  pageSize = 6;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  productTypeId: number;
  productType: string;
  productBrandId: number;
  productBrand: string;
}
