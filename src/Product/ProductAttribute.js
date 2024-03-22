export default class ProductAttribute 
{
    constructor(name, value) 
    {
        this.hash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.name = name;
        this.value = value;
    }
    
    toString() {
        return `${this.name}: ${this.value}`;
    }

    toJson() {
        return JSON.stringify(this);
    }

    getHash() {
        return this.hash;
    }

    getName() {
        return this.name;
    }

    getValue() {
        return this.value;
    }

    setName(name) {
        this.name = name;
    }

    setValue(value) {
        this.value = value;
    }
}