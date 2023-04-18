import { reactive } from "vue";

export const state = reactive ({
    loading: '',
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0',
    cards: null,
    meta: null,
})