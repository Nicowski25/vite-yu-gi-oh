import axios from "axios";
import { reactive } from "vue";

export const store = reactive ({
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    cards: null,
    info: null,
    fetchCards(url) {
        axios
        .get(url)
        .then(response => {
            this.cards = response.data.results
            this.info = response.data.info
            console.log(cards);
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
    }
})