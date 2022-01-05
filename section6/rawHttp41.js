const http = require('http');
const url = "http://api.weatherstack.com/current?access_key=e8ec570dbf0e6390e82f24f4004c2a10&query=37.8267,-122.4233";
const request = http.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {   //when data comes in 
        data = data + chunk.toString();        
    })
    response.on('end', ()=>{
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log('An Error! : ', error);
})

request.end();