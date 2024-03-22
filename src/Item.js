import { Product } from "product";

export default class Item
{
    options = [];
    service = null;
    attributes = {};

    constructor(product, price, currency, quantity=1, attributes={})
    {
        if (!(product instanceof Product)) {
            throw new Error('Product must be an instance of Product');
        }

        this.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

        this.product = product;
        this.quantity = quantity;
        this.price = price;
        this.currency = currency;


        this.attributes = attributes;
    }

    setAttribute(key, value) {
        this.attributes[key] = value;
    }

    getAttribute(key) {
        return this.attributes[key];
    }

    removeAttribute(key) {
        delete this.attributes[key];
    }

    getSubtotal() {
        return this.product.price * this.quantity;
    }

    toJSON() {
        return {
            product: this.product.toJSON(),
            quantity: this.quantity,
            price: this.price,
            currency: this.currency,
            subTotal: this.getSubtotal(),
            data: this.data,
        };
    }


}
