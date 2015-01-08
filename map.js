

$(function() {

  //city name is obj key, with lat and long in 2 item array as obj property
  cityData = {
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
  
  var unaskedCities = Object.keys(cityData);

  var currentCity = setupGame(cityData, unaskedCities);

 


  //check if button clicked is right or wrong
  $("button").on("click", function() {
    
    if ($(this).text() === currentCity) {
      $("#correct").fadeIn(500).delay(200).fadeOut(500, function(){
        //remove matched city from list and load new map and buttons
        unaskedCities.splice(unaskedCities.indexOf(currentCity), 1);
        currentCity = setupGame(cityData, unaskedCities);
      });
    }
    else {
      $("#wrong").fadeIn(500).delay(200).fadeOut(500, function() {
        //same as above...not very DRY!
        unaskedCities.splice(unaskedCities.indexOf(currentCity), 1);
        currentCity = setupGame(cityData, unaskedCities);
      });
    }

   

  });

});






function setupGame(cityData, unaskedCities) {
   //create array of city names (taken from citydata keys)
  var cityNames = Object.keys(cityData);

  //randomly pick city for map
  var currentCity = _.sample(unaskedCities);

  //create map
  var map = loadMap(cityData, currentCity);

  //label buttons
  randomizeButtons(cityNames, currentCity);

  return currentCity;
}






function loadMap(cityData, currentCity) {

  var mapOptions = {
    center: new google.maps.LatLng(cityData[currentCity][0], cityData[currentCity][1]),
    zoom: 10,
    mapTypeId:google.maps.MapTypeId.SATELLITE,
    disableDefaultUI: true,
    draggable: false,
    scrollwheel: false
  };
  
  return new google.maps.Map(document.getElementById('map'), mapOptions);
  
}




function randomizeButtons(cityNames, currentCity) {
  
  var totalCities = cityNames.length;
  
  //first cut answer from list of city names then shuffle remaining
  cityNames.splice(cityNames.indexOf(currentCity), 1);
  cityNames = _.shuffle(cityNames);
 
  //use only the first 5 elements, cut the rest, and add currentcity and shuffle it in
  cityNames.splice(5, totalCities - 5, currentCity);
  cityNames = _.shuffle(cityNames)

  $("#b0").text(cityNames[0]);
  $("#b1").text(cityNames[1]);
  $("#b2").text(cityNames[2]);
  $("#b3").text(cityNames[3]);
  $("#b4").text(cityNames[4]);
  $("#b5").text(cityNames[5]);

}


