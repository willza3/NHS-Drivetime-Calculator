type="text/javascript"
charset="UTF-8"

var platform = new H.service.Platform({
    app_id: 'FOS7x9AxfWAnpKpjTGnV',
    app_code: 'Ypbj9r3Koexac-WWPBbe_A',
    useHTTPS : true
  });

  var pixelRatio = window.devicePixelRatio || 1;
  var defaultLayers = platform.createDefaultLayers();

  var map = new H.Map(document.getElementById('map'),
  defaultLayers.normal.map);

  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  var ui = H.ui.UI.createDefault(map, defaultLayers);
  // Replaces the metric system with imperial measurements
  ui.setUnitSystem(H.ui.UnitSystem.IMPERIAL);

// Shows Map

  function showMap(map){
    // Center map on Ysbyty Gwynedd
    map.setCenter({lat:53.209045, lng:-4.159840});
    map.setZoom(16);

    // Show local traffic and reported incidents
    map.setBaseLayer(defaultLayers.normal.traffic);
    map.addLayer(defaultLayers.incidents);
  }

  showMap(map);

// Shows markers on local hospitals

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

  function addMarkerToGroup(group, coordinate, html) {
    var marker = new H.map.marker(coordinate);
    marker.setData(html);
    group.addObject(market);
  }

  function addInfoBubble(map) {
    var group = new H.map.Group();
    map.addObject(group);

    group.addEventListener('tap', function (evt) {
      var bubble = new H.ui.InfoBubble(evt.target.getPosition(), {
        content: evt.target.getData()
      });
      ui.addBubble(bubble);
    }, false);

    addMarkerToGroup(group, {lat:53.209045, lng:-4.159840},
      '<div><a href=\'http://www.mcfc.co.uk\' >Manchester City</a>' +
      '</div><div >City of Manchester Stadium<br>Capacity: 48,000</div>');
  }

  addInfoBubble(map);
  $('head').append('<link rel="stylesheet" href="https://js.api.here.com/v3/3.0/mapsjs-ui.css" type="text/css" />');