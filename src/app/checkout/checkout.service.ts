import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {IDeliveryMethodResponse} from "../shared/models/delivery-method";
import {IOrderRequest} from "../shared/models/order";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  createOrder(order: IOrderRequest) {
    return this.http.post(this.apiUrl + 'order', order);
  }

  getDeliveryMethods() {
    return this.http.get(this.apiUrl + 'order/deliverymethods').pipe(
      map((response: IDeliveryMethodResponse) => {
        return response.deliveryMethods.sort((a, b) => b.price - a.price);
      })
    );
  }
}
