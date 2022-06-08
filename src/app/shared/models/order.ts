export interface IOrderRequest {
  basketId: string;
  deliveryMethodId: number;
  shipToAddress: IAddress;
}

export interface IOrderResponse {
  order: IOrder;
}

export interface IOrderListResponse {
  orders: IOrder[];
}

export interface IAddress {
  id: number;
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface IOrderItem {
  productId: number;
  productName: string;
  pictureUrl: string;
  price: number;
  quantity: number;
}

export interface IOrder {
  id: number;
  userEmail: string;
  orderDate: Date;
  shipToAddress: IAddress;
  deliveryMethod: string;
  shippingPrice: number;
  orderItems: IOrderItem[];
  subtotal: number;
  total: number;
  status: string;
  paymentIntentId: string;
}
