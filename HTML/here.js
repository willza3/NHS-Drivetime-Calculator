var platform = new H.service.Platform({
    app_id: 'FOS7x9AxfWAnpKpjTGnV',
    app_code: 'Ypbj9r3Koexac-WWPBbe_A',
    useHTTPS : true
  });

  var pixelRatio = window.devicePixelRatio || 1;
  var defaultLayers = platform.createDefaultLayers({
    tileSize: pixelRatio === 1 ? 256 : 512,
    ppi: pixelRatio === 1 ? undefined : 320
  });

  var map = new H.Map(document.getElementById('map'),
  defaultLayers.normal.map, {pixelRatio: pixelRatio});

  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  var ui = H.ui.UI.createDefault(map, defaultLayers);

  function showMap(map){
    // Center map on Ysbyty Gwynedd
    map.setCenter({lat:53.209045, lng:-4.159840});
    map.setZoom(15);

    // Show local traffic and reported incidents
    map.setBaseLayer(defaultLayers.normal.traffic);
    map.addLayer(defaultLayers.incidents);
  }

  showMap(map);

  function showMarkers(map) {
    // Shows a marker on Ysbyty Gwynedd
    var ysbytyGwynedd = new H.map.Marker({lat:53.209045, lng:-4.159840});
    map.addObject(ysbytyGwynedd);

    // Shows a marker on Ysbyty Glan Clwyd
    var glanClwyd = new H.map.Marker({lat:53.272108, lng:-3.495862});
    map.addObject(glanClwyd);

    // Shows a marker on Ysbyty Cefni
    var cefni = new H.map.Marker({lat:53.256637, lng:-4.304217});
    map.addObject(cefni);

    // Shows a marker on Ysbyty Eryri
    var eryri = new H.map.Marker({lat: 53.130115, lng:-4.262825});
    map.addObject(eryri);

    // Shows a marker on Llandudno General Hospital
    var llandudnoGh = new H.map.Marker({lat: 53.311447, lng:-3.827709});
    map.addObject(llandudnoGh);
  }

  showMarkers(map);