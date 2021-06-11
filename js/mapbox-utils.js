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
























