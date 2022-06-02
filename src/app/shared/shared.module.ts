import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {PagingHeaderComponent} from './components/paging-header/paging-header.component';
import {PagerComponent} from './components/pager/pager.component';
import {CarouselModule} from "ngx-bootstrap/carousel";
import {OrderSummaryComponent} from './components/order-summary/order-summary.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {TextInputComponent} from './components/text-input/text-input.component';

@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    OrderSummaryComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    OrderSummaryComponent,
    ReactiveFormsModule,
    BsDropdownModule,
    TextInputComponent
  ]
})
export class SharedModule {
}
