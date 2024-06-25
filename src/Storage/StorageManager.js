import LocalStorage from "./LocalStorage.js";
import CookieStorage from "./CookieStorage.js";
import Storage from "./Storage.js";

export default class StorageManager 
{
    static local = LocalStorage;
    static cookie = CookieStorage;

    constructor(storageType=null) 
    {
        return storageType || new Storage(storageType);
    }

    static getStorage(storageType=null) 
    {
        return storageType ? new Storage(storageType) : null;
    }
}