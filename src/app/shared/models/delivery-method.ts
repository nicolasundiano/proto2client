export interface IDeliveryMethod {
  id: number,
  shortName: string;
  deliveryTime: string;
  description: string;
  price: number;
}

export interface IDeliveryMethodResponse {
  deliveryMethods: IDeliveryMethod[];
}
