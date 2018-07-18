const axios = require('axios');


const getLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion); 
    
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyAWdZAMO4_Mh_UyHeBFZT8010Xuj0SsN20`)
    
    if (resp.data.status === "ZERO_RESULTS") throw new Error ("No hay resultados con esa direccion")
        
    //console.log('Direccion: ',resp.data.results[0].location);
    //console.log(JSON.stringify(resp.data,undefined,2));
    
    return {
        direccion: resp.data.results[0].formatted_address,
        lat: resp.data.results[0].geometry.location.lat,
        lng: resp.data.results[0].geometry.location.lng
    }
    
} 


module.exports = {
    getLugarLatLng
}