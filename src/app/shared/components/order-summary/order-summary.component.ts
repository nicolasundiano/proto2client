import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IBasketTotal} from "../../models/basket";
import {BasketService} from "../../../basket/basket.service";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  basketTotal$: Observable<IBasketTotal>;

  constructor(private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.basketTotal$ = this.basketService.basketTotal$;
  }

}
