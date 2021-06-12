mapboxgl.accessToken = MAPBOX_TOKEN;

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/satellite-v9",
    center: [-95.43900535013829, 41.493514625750066],
    zoom: 4
});
var currentCoordinates;

// - immediate function for changing map layers
(function (){
    let layerList = document.getElementById('menu');
    let inputs = layerList.getElementsByTagName('input');

    function switchLayer(layer) {
        let layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId);
    }

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].onclick = switchLayer;
    }
})()

let myGeoCoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: false
})

let marker;
addGeoEvent(myGeoCoder);
myGeoCoder.addTo("#geocoder");

function addGeoEvent(geocode) {
    geocode.onAdd(map);
    geocode.on("result", function (e){
        // console.log(e);
        createPopup(e.result.place_name, trySetMarker(e.result.center));
        $("#current-place").text(e.result.place_name);
        currentCoordinates = e.result.geometry.coordinates;
        console.log(`The current coordinates for the weather search is ${currentCoordinates}`);
        getForecast();
    })
}
function createPopup(popupDetails, marker) {
    let popup = new mapboxgl.Popup().setHTML(`<p>${popupDetails}</p>`).addTo(map);
    marker.setPopup(popup);
}
function setMarker(point) {
    return new mapboxgl.Marker({
        color: '#F84C4C'
    })
}
function trySetMarker(point) {
    if (!marker) {
        marker = setMarker(point);
    }
    return marker.setLngLat(point).addTo(map);
}
function reverseGeocode(coordinates, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            return data.features[0].place_name;
        });
}

map.on("click", function (e){
    // console.log(e);
    reverseGeocode(e.lngLat, mapboxgl.accessToken).then(function(results) {
        // console.log(results);
        createPopup(results, trySetMarker(e.lngLat));
        $("#current-place").text(results);
    });
    currentCoordinates = [e.lngLat.lng, e.lngLat.lat];
    console.log(`The current coordinates for the weather search is ${currentCoordinates}`);
    getForecast();
})






















