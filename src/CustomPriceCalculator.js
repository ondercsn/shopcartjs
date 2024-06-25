export default class CustomPriceCalculator
{
    priceList = {};

    constructor(priceList=null) {
        this.priceList = priceList;
    }

    setPrices(priceList) {
        this.priceList = priceList;
        return this;
    }

    findClosestQuantities(value)
    {
        const prices = this.priceList;
        let lowerQuantity = 0;
        let higherQuantity = Infinity;

        for(const price of prices) {
            if (price.quantity <= value && price.quantity > lowerQuantity) {
                lowerQuantity = price.quantity;
            }
            if (price.quantity >= value && price.quantity < higherQuantity) {
                higherQuantity = price.quantity;
                break;
            }
        }
        return { lower: lowerQuantity, higher: higherQuantity };
    }

    getPriceBoundaries() 
    {
        const quantities = this.priceList.map(price => price.quantity).sort((a, b) => a - b);
        return { lower: Math.min(...quantities), higher: Math.max(...quantities) };
    }

    findPriceByQuantity(quantity) {
        const item = this.priceList.find(price => price.quantity === quantity);
        if (item)
             return item.price
        return null;
    }

    calculatePrice(userInput, decimals=2) {
        const inputPrice = parseFloat(userInput);

        const { lower, higher } = this.findClosestQuantities(inputPrice);
        const lowerPrice = parseFloat(this.findPriceByQuantity(lower));
        const higherPrice = parseFloat(this.findPriceByQuantity(higher));
        const boundaries = this.getPriceBoundaries();

        let additionalCost = 0;
        let result = 0;

        if (lower === higher) {
            result = lowerPrice;
        } else if (inputPrice <= boundaries['lower']) {
            result = (inputPrice * (this.findPriceByQuantity(boundaries['lower'])/boundaries['lower']));
        } else if (inputPrice >= boundaries['higher']) {
            result = (inputPrice * (this.findPriceByQuantity(boundaries['higher'])/boundaries['higher']));
        } else {
            additionalCost = (inputPrice - lower) * ((higherPrice - lowerPrice) / (higher - lower));
            result = lowerPrice + additionalCost;
        }

        return result.toFixed(decimals);
    }
}
