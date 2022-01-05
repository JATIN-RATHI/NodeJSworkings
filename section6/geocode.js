const request = require("request");

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiamF0aW5yYXRoaSIsImEiOiJja3d4YXhqdDMwYm05MndxdHYzYndtdmt2In0.FFIeeKeT69AwX5emzLMROQ";

    request({url, json:true}, (error, {body})=>{
        if(error){
            callback("Please connect to Internet!");
        }else if (body.message){
            callback(body.message);
        }else {
            callback(undefined, {
                    location: body.features[0].place_name, 
                    longitude: body.features[0].center[0] ,
                    latitude: body.features[0].center[1]
                })
        }
    })
}


module.exports = geocode;   //we can use this function anywhere