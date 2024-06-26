import {stringify, toJSON} from 'flatted';

export default class CartItem
{
    options = [];
    service = null;
    attributes = {};

    constructor(product, price, currency, quantity=1, attributes={})
    {
        this.id = this.generateHash();

        this.product = product;
        this.quantity = quantity;
        this.price = price;
        this.currency = currency;

        this.attributes = attributes;
    }

    generateHash() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
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
        return this.price * this.quantity;
    }

    toJSON() {
        let product = this.product;
        if (product !== null) {
            product = product.simplify();
        }
        return {
            product: product, //? toJSON(this.product.simplify()) : null,
            options: this.options,
            quantity: this.quantity,
            price: this.price,
            currency: this.currency,
            subTotal: this.getSubtotal(),
            data: this.data,
            attributes: this.attributes,
        };
    }


}
