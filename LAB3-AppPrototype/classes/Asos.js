import Weather from "./Weather.js";

export default class Asos {
    constructor(api_key) {
        this.apiKey = api_key;
        this.lang = 'en-GB';
        this.location = 'US';
        this.sizeChart = 'US';
        this.currency = 'USD';
        this.itemId = "13600001";
        console.log("Asos class initialized" + this.apiKey);
    }

    getClothes() {
        console.log("hello");

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8bad7b9159mshe64915501abe39bp17e52bjsn11ce99767a19',
                'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
            }
        };

        const url = `https://asos2.p.rapidapi.com/products/v3/detail?id=${this.itemId}&lang=${this.lang}&store=${this.location}&sizeSchema=${this.sizeChart}&currency=${this.currency}`

        fetch(url, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
}