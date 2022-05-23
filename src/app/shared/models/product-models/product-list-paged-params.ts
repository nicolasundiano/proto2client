export class ProductListPagedParams {
  search: string;
  brandId: number = 0;
  typeId: number = 0;
  sort = 'nameAsc';
  pageIndex = 1;
  pageSize = 6;
}
