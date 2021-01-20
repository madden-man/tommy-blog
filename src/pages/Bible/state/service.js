import axios from "axios";

const API_KEY = 'Token cd1bd23f49f8cf1f11e25f93432ee51570dead65';

const BibleApi = {
  fetch: (book, chapter) => axios.get(`https://api.esv.org/v3/passage/text/?q=John+11+35`,
    { 'Authorization': API_KEY }),
};

export default BibleApi;
