

//container for app's variables
var MAPAPP = {};

//city name is obj key, with lat and long in 2 item array as obj property
MAPAPP.cityData = {
  "New York, NY": [40.6643, -73.9385],
  "Los Angeles, CA": [34.0194, -118.4108],
  "Chicago, IL": [41.8376, -87.6818],
  "Houston, TX": [29.7805, -95.3863],
  "Philadelphia, PA": [40.0094, -75.1333],
  "Phoenix, AZ": [33.5722, -112.0880],
  "Detroit, MI": [42.3830, -83.1022],
  "Memphis, TN": [35.1035, -89.9785],
  "Seattle, WA": [47.6205, -122.3509],
  "Denver, CO": [39.7618, -104.8806],
  "Boston, MA": [42.3320, -71.0202],
  "Las Vegas, NV": [36.2277, -115.2640]
};

MAPAPP.cityNames = Object.keys(MAPAPP.cityData);









var city = _.sample(MAPAPP.cityNames);


google.maps.event.addDomListener(window, 'load', loadMap);



$(function() {


});












function loadMap() {

  var mapOptions = {
    center: new google.maps.LatLng(MAPAPP.cityData[city][0], MAPAPP.cityData[city][1]),
    zoom: 10,
    mapTypeId:google.maps.MapTypeId.HYBRID,
    disableDefaultUI: true,
    draggable: false,
    scrollwheel: false
  };
  
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
}


