import Weather from "./Weather.js";

export default class Asos {
    constructor(api_key) {
        this.apiKey = api_key;
        console.log("Asos class initialized" + this.apiKey);
    }

    getClothes() {
        console.log("hello");

        const clothing = document.querySelector('.clothing');

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
            }
        };

        fetch('https://asos2.p.rapidapi.com/v2/auto-complete?q=bikini%20top&store=US&country=US&currency=USD&sizeSchema=US&lang=en-US', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

        clothing.innerHTML = "hello";
    }
}