const axios = require('axios');
let xapi = 'c9b19c9f0ba5dff221fdfac3ff85d8e7';

const getLatLong = async(direction) => {
    const instanceAxios = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${direction}&appid=${xapi}`
    });

    const rest = await instanceAxios.get();
    if (rest.data.cod !== 200) throw new Error(` Error message: ${rest.data}`);
    return rest.data;
}

module.exports = {
    getLatLong
}