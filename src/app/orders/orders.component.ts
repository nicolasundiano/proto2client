import {Component, OnInit} from '@angular/core';
import {IOrder, IOrderListResponse} from '../shared/models/order';
import {OrdersService} from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: IOrder[];

  constructor(private orderService: OrdersService) {
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrdersForUser().subscribe({
      next: (response: IOrderListResponse) => {
        this.orders = response.orders;
      },
      error: err => console.log(err)
    })
  }
}
