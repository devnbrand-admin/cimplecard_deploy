import axios from 'axios'


axios.defaults.withCredentials = true;


export default axios.create({
    // baseURL: ""
    baseURL: "https://cimple-card.onrender.com"

})