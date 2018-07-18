const axios = require('axios');

const getClima = async(lat,lng) => {
    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=721d9e9c8d996057ea4f063f908bfea2`);
    
    if(result.cod === "400") throw new Error('No se encontro la temperatura')
    
    return result.data.main.temp
    
}


module.exports = {
    getClima
}