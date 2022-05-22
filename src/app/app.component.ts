import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "./interfaces/product-interfaces/product";
import {IProductListPaged} from "./interfaces/product-interfaces/product-list-paged";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Proto2';
  products: IProduct[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("https://localhost:5001/api/products?pageSize=50").subscribe({
      next: (response: IProductListPaged) => this.products = response.data,
      error: (response) => console.log(response)
    });
  }
}
