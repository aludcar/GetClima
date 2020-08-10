const axios = require('axios');
const apiKey = "c9b19c9f0ba5dff221fdfac3ff85d8e7";

const getClima = async(lat, lon) => {
    const instceAxios = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    });

    const rest = await instceAxios.get();
    if (rest.data.cod !== 200) throw new Error(` Error message: ${rest.data}`);

    return rest.data.main.temp;
}

module.exports = {
    getClima
}