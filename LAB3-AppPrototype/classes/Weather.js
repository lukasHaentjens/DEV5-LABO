import Amazon from "./Amazon.js";

const amazon = new Amazon('8bad7b9159mshe64915501abe39bp17e52bjsn11ce99767a19');
amazon.getClothes();

export default class Weather {
    constructor(api_key) {
        this.apiKey = api_key;
        this.getLocation();
        console.log("Weather class initialized" + this.apiKey);
    }
    getLocation() {
        if (navigator.geolocation) {
            console.log("Getting location");
            navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    getWeather(position) {
        console.log(position);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const url = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${lat},${lon}&aqi=no`;

        // check if location is saved in Local Storage
        if (localStorage.getItem('weather') && Date.now() - localStorage.getItem('weatherTime') < 1000 * 60 * 60) {
            // get weather from local storage
            const weather = JSON.parse(localStorage.getItem('weather'));
            this.weatherDisplay(weather);
        }else {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    // save weather to local storage
                    localStorage.setItem('weather', JSON.stringify(data));
                    this.weatherDisplay(data);
                });
        }
    }
    weatherDisplay(data) {
        const title = document.querySelector('.weather--status');

        title.innerHTML = data.current.condition.text;

        this.weather = data.current.condition.text;
        console.log("Display weather function " + this.weather);

        this.getClothes(this.weather);
    }
    getClothes(weather) {
        const amazon = new Amazon('8bad7b9159mshe64915501abe39bp17e52bjsn11ce99767a19', weather);
    }
}