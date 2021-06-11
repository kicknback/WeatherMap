mapboxgl.accessToken = MAPBOX_TOKEN;

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/satellite-v9",
    center: [-97.76443791775463, 30.27401521055017],
    zoom: 4
});

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
        console.log(e.result.center);
        createPopup(e.result.place_name, trySetMarker(e.result.center));
        $("#current-place").text(e.result.place_name);
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





















