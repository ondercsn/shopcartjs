export default class Option 
{
    constructor(name, value, data={}) {
        this.name = name;
        this.value = value;
        this.data = data;
    }

    toString() {
        return `${this.name}: ${this.value}`;
    }

    toJson() {
        return JSON.stringify(this);
    }

    getData() {
        return this.data;
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