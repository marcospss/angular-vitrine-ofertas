import { CartItem } from '@models/cart-item.model';
export interface Order {
    firstName: string;
    lastName: string;
    email: string;
    address: object;
    items: Array<CartItem>;
}
