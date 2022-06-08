import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getOrdersForUser() {
    return this.http.get(this.apiUrl + 'order');
  }

  getOrderDetailed(id: number) {
    return this.http.get(this.apiUrl + 'order/' + id);
  }
}
