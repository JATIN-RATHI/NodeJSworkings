const geocode = require("./geocode");
const forecast = require("./forecast");

const address = process.argv[2];
if(!address)
{
    console.log("Please provide the location!");
}else{
    geocode(address, (error, {latitude, longitude, location}={}) => {
        if(error)
        {
            return console.log(error);
        }
        // console.log(error);
        console.log(location);
        forecast(latitude,longitude, (error, forecastdata)=>{ //callback chaining
            if(error)
            {
                return console.log(error);
            }
            // console.log(location);
            console.log(forecastdata);
        })
    })
}




