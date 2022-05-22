import {IProduct} from "./product";

export interface IProductListPaged {
  pageIndex: number;
  pageSize: number;
  count: number;
  pageCount: number;
  data: IProduct[];
}
