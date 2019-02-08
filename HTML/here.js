// Initialises communication with HERE's back-end services //
var platform = new H.service.Platform({
  'app_id': '{FOS7x9AxfWAnpKpjTGnV}',
  'app_code': '{Ypbj9r3Koexac-WWPBbe_A}'
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.normal.map,
  {
    zoom: 10,
    center: { lat: 53.2274, lng: 4.1293 }
  });