import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { api_key } from "./utilities.js";

const app = express();
const port = 3000;
const path = "d:/Projects/Weather application using API/public"
const weatherAPI_URL = "https://api.openweathermap.org/data/2.5/weather";
const geoAPI_URL = "http://api.openweathermap.org/geo/1.0/direct";
let data;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req,res)=>{
    res.render("index.ejs");
});

app.post("/curweather", async(req,res)=>{
try{
    var location = req.body.location;
   
    const geocode = await axios.get(geoAPI_URL,{
        params:{
            q:location,
            appid:api_key,
        }
    });
    const response = JSON.stringify(geocode.data);
    console.log(response);
    const result =(geocode.data);
    console.log(result);
    console.log(result[0].name);

    var latitude = result[0].lat;
    var longitude = result[0].lon;

    const weather_details = await axios.get(weatherAPI_URL,{
        params:{
            lat:latitude,
            lon:longitude,
            appid:api_key,
            units:"metric",
            
            
        }
    });
    console.log(weather_details.data);
    res.render("index.ejs",{data:weather_details});
   
       
    
}
catch(error){
  console.log("Failed to make connection:", error.message);
  res.render("index.ejs",{error:error.message})
}


});


app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
});