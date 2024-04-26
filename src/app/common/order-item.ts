import { CartItem } from "./cart-item";

export class OrderItem {
    imageUrl!: string;
    unitPrice!: number;
    quantity!: number;
    productId!: number;

    constructor(carItem: CartItem) {
        this.imageUrl = carItem.imageUrl;
        this.quantity = carItem.quantity;
        this.unitPrice = carItem.unitPrice;
        this.productId = carItem.id;
    }
}
