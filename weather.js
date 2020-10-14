const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude  = position.coords.longitude;
    const coordsObj = {
        latitude,//latitude : latitude,
        longitude//longitude : longitude
    };
    saveCoords(coordsObj);    
}
function handleGeoError(){
    console.log("cannot access geo location");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        
    }
}
function init(){
    loadCoords();
}

init();