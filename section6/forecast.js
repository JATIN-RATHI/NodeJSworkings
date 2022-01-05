const request = require('request');

const forecast = (latitude, longitude, data) => {
    const url = "http://api.weatherstack.com/current?access_key=e8ec570dbf0e6390e82f24f4004c2a10&query=" + latitude + "," + longitude;

    // destructured response with {body }
    request({url, json:true}, (error, {body})=>{
        if(error){
            console.log("Unable to connect to weather service!");
        } else if(body.error) {
            console.log(body.error.info);    //if in url long and lat is missing
        } else {
            console.log(body.current.weather_descriptions[0] + " .It is currently " + body.current.temperature + " degree out and feels like " + body.current.feelslike);
            console.log("There is a " + body.current.precip + "% chance of rain.");
        }
    })
}

module.exports  = forecast;

