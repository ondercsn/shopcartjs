import Item from './Item';

export default class Cart
{
    items = [];

    constructor(type) {
        this.type = type;
    }

    addCartToCookie() {
        const cart = this.toJSON();
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    add(item) {
        if(!(item instanceof Item)) {
            throw new Error('item add error');
        }
        this.items.push(item);
        this.dispatchEvent('cartItemsChanged', this.items);
        this.dispatchEvent('cartUpdated');
    }

    addOption(option) {
        this.options.push(option);
    }


    remove(item) {
        this.items = this.cart.filter(p => p.id !== item.id);
        this.dispatchEvent('cartItemsChanged', this.items);
        this.dispatchEvent('cartUpdated');
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    getItems() {
        return this.items;
    }

    clear() {
        this.items = [];
    }

    getItemById(id) {
        return this.items.find(item => item.id === id);
    }


    dispatchEvent(eventType, eventData=null) {
        const event = new CustomEvent(eventType, { data: eventData });
        document.dispatchEvent(event);
    }

    toJSON() {
        return this.items.map(item => item.toJSON());
    }
}
