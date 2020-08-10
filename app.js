const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')
const argv = require('yargs')
    .options({
        direction: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    })
    .help()
    .argv;

const getInfo = async(direction) => {
    try {
        const resLugar = await lugar.getLatLong(direction);
        const resClima = await clima.getClima(resLugar.coord.lat, resLugar.coord.lon);
        return `el clima de: ${direction} es ${resClima}`;
    } catch (error) {
        return `No se pudo determinar el clima para" ${direction}`;
    }

    return resss;
};

getInfo(argv.direction)
    .then(rest => {
        console.log(rest);
    })
    .catch(err => console.log(err));