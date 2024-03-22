import Money from "monijs";

export default class Product
{
    attributes = [];
    options = [];
    data = {}

    constructor(id, price, currency, data={})
    {
        this.id = id;
        this.price = price;
        this.data = data;

        //if (price !== null) {
        this.price = this.priceToMoney(price, currency);
        //}
    }

    priceToMoney(amount, currencyCode=null) {
        return Money.createByCurrencyCode(currencyCode ?? 'usd', amount);
    }

    getData(key) {
        return this.data[key];
    }

    setData(key, value) {
        this.data[key] = value;
    }


    toJson()
    {
        let jsonObj = {};
        let properties = Object.getOwnPropertyNames(this);
        for (let prop of properties) {
            jsonObj[prop] = this[prop];
        }
        return JSON.stringify(jsonObj);
    }

    validateQuantity(quantity=null) {
        const _quantity = quantity ?? parseInt(this.quantity);
        if (_quantity > 0)
            return true;
        return false;
    }

    addAttribute(attribute) {
        if (!(attribute instanceof ProductAttribute))
            throw new Error('Invalid attribute');

        this.attributes.push(attribute);
    }

    removeAttribute(hash) {
        this.attributes = this.attributes.filter(attribute => attribute.hash !== hash);
    }

    addOption(option) 
    {
        if (!(attribute instanceof Option))
            throw new Error('Invalid option');

        this.options.push(option);
    }

    removePostById(id) {
        //this.posts.splice(this.posts.indexOf(post), 1);
        this.posts.forEach(post => {
            if (post.id == id)
                this.posts.splice(this.posts.indexOf(post), 1);
        });
    }

    

}
