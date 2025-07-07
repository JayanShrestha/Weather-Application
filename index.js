import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { api_key } from "./utilities";

const app = express();
const port = 3000;
const weatherAPI_URL = "https://api.openweathermap.org/data/2.5/weather";
const geoAPI_URL = "http://api.openweathermap.org/geo/1.0/direct";


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
});