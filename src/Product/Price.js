export default class Price 
{
    constructor(currency, value) {
        this.currency = currency;
        this.value = value;
    }
    
    getValue() {
        return this.value;
    }
    
    getCurrency() {
        return this.currency;
    }
    
    toString() {
        return `${this.value} ${this.currency}`;
    }
}