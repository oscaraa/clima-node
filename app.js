const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion : {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el climar',
        demand: true
    }
}).argv;

//console.log(argv.direccion);


let getInfo = async(direccion) => {
    
    try{
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat,coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}`;
    }catch(e){
        return `No se pudo determinar el clima en ${direccion}`;
    }
    
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));


//lugar.getLugarLatLng(argv.direccion)
//    .then(resp => {
//        console.log(resp)
//    })
//    .catch(e => console.log(e));

//clima.getClima(20.6237413,-103.2413723)
//    .then(temp => console.log(temp))
//    .catch(e => console.log(e))