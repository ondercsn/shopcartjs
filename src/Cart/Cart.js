import { toJSON as flatted_tojson } from "flatted";
export default class Cart
{
    items = [];
    storage = null;
    storageKey = "cart";
    options = [];

    constructor(type, attributes={}) 
    {
        this.type = type;
        this.storage = attributes.storage ?? null;
        this.storageKey = attributes.storageKey ?? this.storageKey;
    }

    save() {
        const items = this.items.map(item => item.toJSON());
        const stringItems = [];
        /*for (const item of items) {
            item.product = item.product.id;
            stringItems.push(JSON.stringify(item));
        }*/

        this.storage.set(this.storageKey, stringItems);
    }

    add(item) 
    {
        /*if(!(item instanceof CartItem)) {
            throw new Error('item add error');
        }*/
        this.items.push(item);
        this.dispatchEvent('cartItemsChanged', this.items);
        this.dispatchEvent('cartUpdated');
    }

    addOption(cartItem, option) {
        this.items = this.items.map(item => {
            if(item.id === cartItem.id) {
                item.options.push(option);
            }
            return item;
        });
        //this.options.push(option);
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
        return JSON.stringify({
            items: this.items.map((item) => item.toJSON()),
            type: this.type,
        });
    }
}
