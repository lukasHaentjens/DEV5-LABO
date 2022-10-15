export default class Amazon {
    constructor(api_key, weather) {
        this.apiKey = api_key;
        this.getClothes(weather);
        console.log("Asos class initialized" + this.apiKey);
    }

    getClothes(weather) {
        switch (weather) {
            case "Clear":
                this.keyWord = "Sunscreen";
                break;
            case "Sunny":
                this.keyWord = "cap";
                break;
            case "Partly cloudy":
                this.keyWord = "sunglasses";
                break;
            case "Cloudy":
                this.keyWord = "t-shirt";
                break;
            case "Light rain":
                this.keyWord = "umbrella";
                break;
            case "Moderate rain":
                this.keyWord = "raincoat";
                break;
            case "Heavy rain":
                this.keyWord = "submarine";
                break;
            case "Overcast":
                this.keyWord = "banana";
                console.log("Overcast");
                break;
            default:
                console.log("Default");
                break;
        }

        const url = `https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=${this.keyWord}&country=US`;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': 'amazon-product-reviews-keywords.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Get first product thumbnail
                let imgSrc = data.products[0].thumbnail;
                const img = document.querySelector('.amazon--img');
                img.src = imgSrc;
                // Get first product link
                let link = data.products[0].url;
                const a = document.querySelector('.amazon--link');
                a.href = link;
            })
            .catch(err => console.error(err));
    }
}