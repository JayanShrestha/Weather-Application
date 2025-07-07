//alert("it is connected");
//import { key } from "./google";
const currentLocation = $('#live_location');
const message ='Fetching the current location!';//message to display on toast message
function showToast(message, duration = 5000) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        setTimeout(() => {
            toast.remove();
        }, 1000); // Match hide animation duration
    }, 8000);
}



    //The div that will display google map
    const mapArea = document.getElementById("map");
    let map;
    let marker;
    //API Key
    //const API_KEY =key;
    //Variables that hold map and marker objects
window.initMap = function(){
    console.log("Google Maps is loaded");
    getLocation();
}
    currentLocation.click(()=>{
       currentLocation.css("display", "none");//hides the location button
       setTimeout(()=>{
        currentLocation.css("display", "block")},5000);
       
        showToast(message);//update user via toast message
        getLocation();
       
    });

    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(displayLocation, showError, {enableHighAccuracy: true});
            //displayLocation is a callback function that takes position as its only parameter
            //showError is a callback function that takes a PositionError as its sole input parameter.
            //options is an object which describes the options property to passed to the getCurrentPosition
        }else{
            showToast("Sorry, Your browser does not support Geo Location, Please update your browser to enjoy it");
        }
        
    }

    function showError(error){// Function that show error

switch(error.code){
    case error.PERMISSION_DENIED:
        mapArea.innerHTML = "You denied the request for your location.";
        break;
    case error.POSITION_UNAVAILABLE:
        mapArea.innerHTML = "Your Location information is unavailable.";
        break;
    case error.TIMEOUT:
      mapArea.innerHTML = "Your request timed out. Please try again";
      break;
    case error.UNKNOWN_ERROR:
      mapArea.innerHTML = "An unknown error occurred please try again after some time.";
      break;
}
    }

function displayLocation(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(`Current Latitude is ${lat} and longitude is ${lng}`);
    const latlng = {lat, lng};
    showMap(latlng);
   
}

async function showMap(latlng){
    let mapOptions = {
        center:latlng,
        zoom: 19,
        mapId:"873cd1ae5bbb5c51a66ae6d0",
    };
     const Gmap = new google.maps.Map(mapArea, mapOptions);  
     const customDiv = document.createElement("div");
        customDiv.style.background = "blue";
        customDiv.style.width = "24px";
        customDiv.style.height = "24px";
        customDiv.style.borderRadius = "50%";
        customDiv.style.border = "2px solid white";
        customDiv.style.boxShadow = "0 0 6px #333";

        const markerOptions = {
          position: latlng,
          map: Gmap,
          content: customDiv,
          title: "Advanced Marker",
        };

        const Gmarker = new google.maps.marker.AdvancedMarkerElement(markerOptions);

        customDiv.addEventListener("click", () => {
          alert("You clicked the marker!");
        });
      }

