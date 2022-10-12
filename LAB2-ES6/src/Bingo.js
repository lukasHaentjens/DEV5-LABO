import Card from "./card.js";

// 🔥🔥🔥 TODO 1 - make sure to export the class, if you want to be able to import the class elsewhere
export default class Bingo {
    constructor() {
        // the constructor is called when you create a new instance of the class
        console.log("Welcome to Bingo! 🎉");

        // an array including 25 cards (5x5)
        this.cards = [
            "Already made a website",
            "Already worked before they started studying",
            "Already designed a logo",
            "Doesn't live with their parents",
            "Doesn't have a Discord account",
            "Has to commute more than 1 hour to school",
            "Is a vegetarian",
            "Can play the guitar",
            "Has already visited the US of A",
            "Is older than 25",
            "Owns a goldfish",
            "Is afraid of snakes",
            "Speaks 3 different languages",
            "Has never been to a festival before",
            "Knows what CSS is",
            "Is a Marvel Comics fan",
            "Knows all the ingredients for a mojito",
            "Has a student job",
            "Plays a team sport",
            "Knows how to play chess",
            "Is a DJ",
            "Likes cilantro",
            "Is afraid of heights",
            "Loves heavy metal music",
            "Is famous on Instagram"
        ];

        // we start by rendering the cards to the screen
        this.renderCards();

        // then we load the saved bingo cards from localstorage to mark them as done
        Bingo.load();
    }

    renderCards() {
        // this function renders the cards to the screen
        console.log("rendering cards");

        // 🔥🔥🔥 TODO 2
        // loop through all the cards in the array and create a new instance of a Card()
        for (let i = 0; i<25; i++){
            // console.log("25 🍕 on the board")
            // console.log(new Card(this.cards.length));
            let card = new Card(this.cards[i]);
            card.render(i);
        }
    }

    static checkWinner() {
        // a static function can be called without creating an instance of the class
        console.log("Checking for a winner");

        // 🔥🔥🔥 TODO 6
        // count all cards that are marked as done (select done items and count them with .length)
        let cardsDone = document.querySelectorAll(".bingo__card--done");
        console.log("cards done", cardsDone.length);
        if (cardsDone.length === 5) {
        // show the animated gif to the winner
        // document.querySelector(".bingo__overlay").style.display = "block";
        document.querySelector(".bingo__overlay").style.display = "block";
        }
        // }
    }

    static save(card) {
        // 🔥🔥🔥 TODO 7
        // save the cards that are done to localstorage
        // you can simply save an array with the card numbers like [1, 6, 8]
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
        let cardsWon = [];
        console.log("Saving bingo to localstorage");
        let cards = document.querySelectorAll(".bingo__card--done");

        // if there are not done cards, remove localstorage
        if (cards.length === 0) {
            console.log("no cards won, removing localstorage");
            // remove localstorage
            localStorage.removeItem("bingo");
        }
        //
        else {
            //   // loop over the cards that are done and save the card number to the array
            console.log("cards won", cardsWon);
            for (let i = 0; i < cards.length; i++) {
                cardsWon.push(cards[i].dataset.number);
            }
            // save a selection like [1, 7, 8] to localstorage item "bingo"
            localStorage.setItem("bingo", JSON.stringify(cardsWon));
        }
        // you might want to check out how JSON.stringify() works <- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    }

    static load() {
        // 🔥🔥🔥 TODO 8
        // load the cards that are done from localstorage
        // this works the other way around of the save function
        // load the saved string from localstorage and parse it as an array, then loop over it
        console.log("loading bingo selection from localstorage");

        // check if localstorage item exists
        if (localStorage.getItem("bingo")) {
            let cardsWon = JSON.parse(localStorage.getItem("bingo"));
            console.log("cards won", cardsWon);
            // loop over the cards that are done and mark them as done
            for (let i = 0; i < cardsWon.length; i++) {
                document.querySelector(`[data-number="${cardsWon[i]}"]`).classList.add("bingo__card--done");
            }
        }
    }
}