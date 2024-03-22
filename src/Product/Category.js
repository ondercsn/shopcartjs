import Product from './Product.js';
import Option from './Option.js';

export default class Category
{
    subCategories = [];
    products = [];
    options = [];
    bundles = [];

    constructor(id, name, data={}) {
        this.id = id;
        this.name = name;
        this.data = data;
    }

    getData(key) {
        return this.data[key];
    }

    setData(key, value) {
        this.data[key] = value;
    }

    getSubcategories() {
        return this.subCategories;
    }

    getProducts() {
        return this.products;
    }

    getOptions() {
        return this.options;
    }

    getBundles() {
        return this.bundles;
    }

    addSubCategory(subCategory) {
        if (!(subCategory instanceof Category))
            throw new Error('Invalid subCategory');

        this.subCategories.push(subCategory);
    }

    removeSubCategoryById(id) {
        this.subCategories = this.subCategories.filter(subCategory => subCategory.id !== id);
    }

    getSubCategoryById(id) {
        return this.subCategories.find(subCategory => subCategory.id === id);
    }

    addProduct(product) {
        if (!(product instanceof Product))
            throw new Error('Invalid product');

        this.products.push(product);
    }

    getProductById(id) {
        return this.products.find(product => product.id === id);
    }

    removeProductById(id) {
        this.products = this.products.filter(product => product.id !== id);
    }

    
    addOption(option) {
        if (!(option instanceof Option))
            throw new Error('Invalid option');

        this.options.push(option);
    }

    getOptionById(id) {
        return this.options.find(option => option.id === id);
    }

    removeOptionById(id) {
        this.options = this.options.filter(option => option.id !== id);
    }

    addBundle(bundle) {
        if (!(bundle instanceof ProductBundle))
            throw new Error('Invalid bundle');

        this.bundles.push(bundle);
    }

    getBundleById(id) {
        return this.bundles.find(bundle => bundle.id === id);
    }

    removeBundleById(id) {
        this.bundles = this.bundles.filter(bundle => bundle.id !== id);
    }


    toJson() {
        let jsonObj = {};
        let properties = Object.getOwnPropertyNames(this);
        for (let prop of properties) {
            jsonObj[prop] = this[prop];
        }
        return JSON.stringify(jsonObj);
    }

    toString() {
        return this.name;
    }



}
