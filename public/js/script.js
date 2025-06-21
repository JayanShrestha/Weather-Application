//alert("it is connected");
import { key } from "./google";
const currentLocation = $('#live_location');
const message ='Fetching the current location!';//message to display on toast message
function showToast(message, duration=5000) {
        const toastContainer = document.getElementById('toast-container');//selects the div for displaying toast message
        const toast = document.createElement('div');//create div
        toast.classList.add('toast');//add class "toast" to newly created div
        toast.textContent = message;//displays message inside the div
        toastContainer.appendChild(toast);//newly created div becomes the child of toast-container

        // Animate in and out
        setTimeout(() => {
            toast.classList.add('show'); // Add class for fade-in
        }, 100);

        setTimeout(() => {
            toast.classList.remove('show');
           
             // Remove class for fade-out
            setTimeout(() => {
                
                toast.remove();
                 // Remove from DOM after transition
            }, 500); // Match CSS transition duration
        }, duration);
    }


    //The div that will display google map
    const mapArea = $('#map');
    //API Key
    const API_KEY =key;
    //Variables that hold map and marker objects
    let Gmap;
    let Gmarker;

   

    currentLocation.click(()=>{
       currentLocation.css("display", "none");
        showToast(message);//update user via toast message
        getLocation();// get the user's position
    });

     getLocation = ()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(displayLocation, showError, options);
        }
        else{
            showToast("Sorry, your browser does not support this feature ...  Please Update your Browser to enjoy it ");
        }
    }