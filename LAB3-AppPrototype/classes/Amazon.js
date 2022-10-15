import Weather from "./Weather.js";

export default class Amazon {
    constructor(api_key) {
        this.apiKey = api_key;
        console.log("Asos class initialized" + this.apiKey);
    }

    getClothes(weather) {
        console.log("hello");

        switch (weather) {
            case "Sunny":
                console.log("Sunny");
                break;
            case "Partly cloudy":
                console.log("Partly cloudy");
                break;
            case "Cloudy":
                console.log("Cloudy");
                break;
            case "Light rain":
                console.log("Light rain");
                break;
            case "Moderate rain":
                console.log("Moderate rain");
                break;
            case "Heavy rain":
                console.log("Heavy rain");
                break;
            case "Overcast":
                console.log("Overcast");
                break;
            default:
                console.log("Default");
                break;
        }

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': 'amazon-product-reviews-keywords.p.rapidapi.com'
            }
        };

        fetch(`https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=iphone&country=US&category=aps`, options)
            .then(response => response.json())
            .then(data => {
                let imgSrc = data.products[0].thumbnail;
                console.log(imgSrc);
                const img = document.querySelector('.amazon--img');
                img.src = imgSrc;
            })
            .catch(err => console.error(err));
    }
}