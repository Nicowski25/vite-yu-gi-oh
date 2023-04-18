import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
    loading: '',
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0',
    cards: null,
    meta: null,
    fetchCards(url) {
        axios
            .get(url)
            .then(response => {
                console.log(response);
                this.cards = response.data.data
                this.meta = response.data.meta
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }
})