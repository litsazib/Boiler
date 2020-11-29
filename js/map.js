var map_styles = [{
    stylers: [{
      saturation: -100
    }]
  }],
  default_map_options = {
    scrollwheel: !1,
    disableDefaultUI: !0,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

function initMap() {
  var myLatLng = {
    lat: 35.6918908,
    lng: 139.6953686
  };

  if (!document.getElementById("map")) return !1;
  var e = JSON.parse(JSON.stringify(default_map_options));
  e.zoom = 17, e.center = new google.maps.LatLng(35.6918908, 139.6953686);
  var a = "MyStyle",
    o = new google.maps.Map(document.getElementById("map"), e);
  o.mapTypes.set(a, new google.maps.StyledMapType(map_styles, {
    name: a
  })), o.setMapTypeId(a);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: o,
  });
}
google.maps.event.addDomListener(window, 'load', initMap);
