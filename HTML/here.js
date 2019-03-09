type = "text/javascript"
charset = "UTF-8"

/* !!! DO NOT CHANGE *ANYTHING* IN VAR PLATFORM AS THIS WILL BREAK ALL RELATED MAP FUNCTIONALITY !!! */
var platform = new H.service.Platform({
    app_id: 'FOS7x9AxfWAnpKpjTGnV',
    app_code: 'Ypbj9r3Koexac-WWPBbe_A',
    useHTTPS: true
});
var pixelRatio = window.devicePixelRatio || 1;
var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(document.getElementById('map'),
    defaultLayers.normal.map);

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
var ui = H.ui.UI.createDefault(map, defaultLayers);

/* Show measurements in the Imperial system, rather than American Metric */
ui.setUnitSystem(H.ui.UnitSystem.IMPERIAL);

/* Show the map*/
function showMap(map) {

    /* Sets the default location on the map to Ysbyty Gwynedd */
    map.setCenter({ lat: 53.209045, lng: -4.159840 });
    map.setZoom(16);

    /* Show local traffic and reported events on the map (accidents, roadworks, closures etc.) */
    map.setBaseLayer(defaultLayers.normal.traffic);
    map.addLayer(defaultLayers.incidents);
}

showMap(map);

/* Show markers on the map for local hospitals */
function showMarkers(map) {
    /* Shows a marker on Ysbyty Gwynedd */
    var ysbytyGwynedd = new H.map.Marker({ lat: 53.209045, lng: -4.159840 });
    map.addObject(ysbytyGwynedd);

    /* Shows a marker on Ysbyty Glan Clwyd */
    var glanClwyd = new H.map.Marker({ lat: 53.272108, lng: -3.495862 });
    map.addObject(glanClwyd);

    /* Shows a marker on Ysbyty Cefni */
    var cefni = new H.map.Marker({ lat: 53.256637, lng: -4.304217 });
    map.addObject(cefni);

    /* Shows a marker on Ysbyty Eryri */
    var eryri = new H.map.Marker({ lat: 53.130115, lng: -4.262825 });
    map.addObject(eryri);

    /* Shows a marker on Llandudno General Hospital */
    var llandudnoGh = new H.map.Marker({ lat: 53.311447, lng: -3.827709 });
    map.addObject(llandudnoGh);
}

showMarkers(map);