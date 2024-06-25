export default class Storage 
{
    constructor(adapter) {
        this.adapter = adapter;
    }
    
    set(key, value) {
        this.adapter.set(key, value);
    }

    get(key) {
        return this.adapter.get(key);
    }

    remove(key) {
        this.adapter.remove(key);
    }

    toJson(data) {
        return JSON.stringify(data);
    }

    fromJson(data) {
        return JSON.parse(data);
    }
}