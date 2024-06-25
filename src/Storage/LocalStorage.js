export default class LocalStorage 
{
    static set(key, value) {
        localStorage.setItem(key, value);
    }

    static get(key) {
        return localStorage.getItem(key);
    }

    static remove(key) {
        localStorage.removeItem(key);
    }
}