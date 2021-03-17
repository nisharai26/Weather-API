const fetch = require('node-fetch');
const fs = require('fs');

const getPlaceholder = async(city,countryCode)=> {
const url =`http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${process.env.API_KEY}`;
let data = await fetch(url);
return await data.json();
}
module.exports = getPlaceholder;