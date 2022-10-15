import Weather from "./Weather.js";

export default class Amazon {
    constructor(api_key) {
        this.apiKey = api_key;
        console.log("Asos class initialized" + this.apiKey);
    }
    getClothes() {
        console.log("hello");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': 'amazon-product-reviews-keywords.p.rapidapi.com'
            }
        };

        fetch('https://amazon-product-reviews-keywords.p.rapidapi.com/product/details?asin=B07ZPKR714&country=US', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
}