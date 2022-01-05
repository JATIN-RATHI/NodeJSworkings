const path = require('path');
const express = require('express');
const hbs = require('hbs');

const geocode = require("../utils/geocode");
const forecast = require("../utils/forecast");

// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));

const app = express();

const pubDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname,'../templates/views');  //updating views path
const partialsPath = path.join(__dirname, '../templates/partials');


app.set('view engine','hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(pubDirectoryPath));

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Jatin Rathi'
        
    });
})

//will not run 
app.get('', (req, res) => {
    res.send('<h1><marquee>Connected!</marquee></h1>');
});

//http://localhost:3000/weather?address=Dallas
app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'Address missing'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location}) => {
        if(error)
        {
            return res.send({  error })
        }
        forecast(latitude,longitude, (error, forecastdata)=>{ //callback chaining
            if(error)
            {
                return res.send({ error })
            }
            
            res.send({
                forecast:forecastdata,
                location,
                address
            })
        })
    })
})


// http://localhost:3000/products?search=games&rating=5
app.get('/products', (req, res)=>{
    // console.log(req.query.search);
    if(!req.query.search){
        return res.send({
            error: 'search term missing'
        })
    }
    
    res.send({
        products:[]
    })
})

app.get('/help', (req, res)=>{
    res.render('help',{
        title:'Help',
        name:'Jatin Rathi'
    })
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Us',
        name: 'Jatin Rathi'
    })
});

app.get('/about', (req, res) => {
    res.render('about',{
        title:'About Us',
        name: 'Jatin Rathi'
    });
});

app.get('*', (req, res)=>{
    res.render('404page');
})

app.listen(3000, () => {
    console.log('Server is up on port 3000!');
});