import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../account/account.service";
import {Observable} from "rxjs";
import {IBasketTotal} from "../shared/models/basket";
import {BasketService} from "../basket/basket.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  basketTotals$: Observable<IBasketTotal>;

  constructor(private fb: FormBuilder, private accountService: AccountService, private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.createCheckoutForm();
    this.getAddressFormValues();
    this.basketTotals$ = this.basketService.basketTotal$;
  }

  createCheckoutForm() {
    this.checkoutForm = this.fb.group({
      addressForm: this.fb.group({
        street: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        country: [null, Validators.required],
        zipCode: [null, Validators.required],
      }),
      deliveryForm: this.fb.group({
        deliveryMethod: [null, Validators.required]
      }),
      paymentForm: this.fb.group({
        nameOnCard: [null, Validators.required]
      })
    })
  }

  getAddressFormValues() {
    this.accountService.getUserAddress().subscribe({
      next: response => {
        if (response?.address) {
          this.checkoutForm.get('addressForm').patchValue(response.address);
        }
      },
      error: err => console.log(err)
    });
  }
}
