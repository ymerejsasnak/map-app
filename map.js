

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
    "Las Vegas, NV": [36.2277, -115.2640],
    "San Antonio, TX": [29.4724, -98.5251],
    "San Diego, CA": [32.8153, -117.1350],
    "Dallas, TX": [32.7757, -96.7967],
    "Indianapolis, IN": [39.7767, -86.1459],
    "Jacksonville, FL": [30.3370, -81.6613],
    "Columbus, OH": [39.9848, -82.9850],
    "Charlotte, NC": [35.2087, -80.8307],
    "Washington, DC": [38.9041, -77.0171],
    "Baltimore, MD": [39.3002, -76.6105],
    "Louisville, KY": [38.1781, -85.6667],
};

  
  var unaskedCities = Object.keys(cityData);
  var totalCities = unaskedCities.length;
  var currentCity = setupCities(cityData, unaskedCities, totalCities);

  var correct = 0;
  
 


  //check if button clicked is right or wrong
  $("button").on("click", function() {
    
    if ($(this).text() === currentCity) {
      correct += 1;
      $("#correct").fadeIn(500).delay(200).fadeOut(500);
    }

    else {
      $("#wrong").fadeIn(500).delay(200).fadeOut(500);
    }
    
    //remove matched city from list and check if there's any left
    //then load new map and buttons or win message (after timeout to wait for jQ effects above)
    setTimeout(function() {
      unaskedCities.splice(unaskedCities.indexOf(currentCity), 1);
      if (unaskedCities.length > 0) {
        currentCity = setupCities(cityData, unaskedCities, totalCities);
      }
      else {
        var winMessage = $("#win");
        winMessage.text("You got " + correct + " of " + totalCities + " right!");
        winMessage.fadeIn(1000);
      }
    }, 1000);

  });

});






function setupCities(cityData, unaskedCities, totalCities) {
   //create array of city names (taken from citydata keys)
  var cityNames = Object.keys(cityData);

  //randomly pick city for map
  var currentCity = _.sample(unaskedCities);

  //create map
  var map = loadMap(cityData, currentCity);

  //label buttons
  randomizeButtons(cityNames, currentCity, totalCities);

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




function randomizeButtons(cityNames, currentCity, totalCities) {
  
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


