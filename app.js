const express =require("express");
const https=require("https");
const path =require("path");
const ejs=require("ejs");
const bodyParser=require("body-parser");

const app =express();
const viewsPath = path.join(__dirname,'templates/views');
app.use(bodyParser.urlencoded({extended :true}));
app.use(express.static("public"));
app.set('view engine','ejs');
app.set('views', viewsPath);


app.get('/' ,(req,res) =>
{
url2="https://api.openweathermap.org/data/2.5/onecall?lat=27.1833&lon=82.9333&exclude=hourly,alerts&&appid=a71179c5b1772340ba5f63c01544efee&units=metric"
https.get(url2, (response) =>
{
response.on('data' ,(d) =>
{
 const weatherData=JSON.parse(d);
const temprature=weatherData.current.temp;
 const description =weatherData.current.weather[0].description;
 const Place =weatherData.timezone ;
 const today_icon =weatherData.current.weather[0].icon;
 const today_iconUrl=" http://openweathermap.org/img/wn/"+today_icon+"@2x.png";

res.render('index',
{
title:"weather App",
temprature: temprature,
place:Place,
today:'Saturday',
today_icon:today_iconUrl,
current_date:'20 June',
current_time:'2:00',
Data:weatherData
});
});
});

});

app.listen(process.env.PORT || 4000, ()=> console.log("listening to port 4000"));
