function initialize() {
  var mapOptions = {
    center: { lng: Math.random() * 40 - 120, lat: Math.random() * 20 + 30},
    zoom: 5,
    mapTypeId:google.maps.MapTypeId.HYBRID
  };
  
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
       
}

google.maps.event.addDomListener(window, 'load', initialize);