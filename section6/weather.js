const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=e8ec570dbf0e6390e82f24f4004c2a10&query=37.8267,-122.4233';
//url for error handling ex ->>  http://api.weatherstack.com/current?access_key=e8ec570dbf0e6390e82f24f4004c2a10&query=
request({url, json:true}, (error, {body})=>{
    // const data = JSON.parse(response.body);
    if(error){
        console.log("Unable to connect to weather service!");
    } else if(body.error) {
        console.log(body.error.info);    //if in url long and lat is missing
    } else {
        console.log(body.current.weather_descriptions[0] + " .It is currently " + body.current.temperature + " degree out and feels like " + body.current.feelslike);
        console.log("There is a " + body.current.precip + "% chance of rain.");
    }
})


//Geocoding 
// Address - > lat/long -> weather 

// Goal : Print the lat/long for los angeles
const geocodeurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/.json?access_token=pk.eyJ1IjoiamF0aW5yYXRoaSIsImEiOiJja3d4YXhqdDMwYm05MndxdHYzYndtdmt2In0.FFIeeKeT69AwX5emzLMROQ";

request({url:geocodeurl, json:true}, (error, {body})=>{
    if(error){
        console.log("Please connect to the Internet!");
    }else if( body.message ) {   //if no token, other missing in url
        console.log(body.message);
    }else{
        console.log("The Latitude of " + body.features[0].place_name 
        + " has latitude " +body.features[0].center[0] + " and longitude "
        + body.features[0].center[1] );
    }
})













