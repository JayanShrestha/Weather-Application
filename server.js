import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import env from "dotenv";


const app = express();
const port = 3000;
env.config();
const weatherAPI_URL = "https://api.openweathermap.org/data/2.5/weather";
const geoAPI_URL = "http://api.openweathermap.org/geo/1.0/direct";
const googleAPIKey = process.env.key;
const geokey = process.env.api_key;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res)=>{
    res.render("index.ejs", {googleAPIKey: googleAPIKey});//Api key for google maps
console.log(googleAPIKey);
});

app.get("/mylocation",(req,res)=>{
    
})

app.post("/curweather", async(req,res)=>{
try{
    var location = req.body.location; // requesting the value from location input
   
    const geocode = await axios.get(geoAPI_URL,{// Getting the geocode for the supplied location from geocoding api
        params:{
            q:location,
            appid:geokey,
        }
    });
    const response = JSON.stringify(geocode.data);// converts the JSON objects to String value
    console.log(response);
    const result =(geocode.data);//All the information including lattitude and longitude are received as geocode.data in the form of array
    console.log(result);
    console.log(result[0].name);

    var latitude = result[0].lat;
    var longitude = result[0].lon;

    const weather_details = await axios.get(weatherAPI_URL,{// Getting the weather details by supplying coordinates from geocode
        params:{
            lat:latitude,
            lon:longitude,
            appid:geokey,
            units:"metric", //temperature comes in celsius
            
            
        }
    });
    
    console.log(weather_details.data);
    console.log(weather_details.data.main.temp);
    res.render("index.ejs",{data:weather_details.data, googleAPIKey: googleAPIKey});// rendering the landing page with all the weather details and googleAPI key
   
       
    
}
catch(error){
  console.log("Failed to make connection:", error.message);
  res.render("index.ejs",{error:error.message, googleAPIKey: googleAPIKey})
}


});


app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
});