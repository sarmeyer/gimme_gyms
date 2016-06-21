$(document).ready(function(){
  $('#homeButton').on('click',function(){
    initMap();
  })

  var map;
     function initMap() {
       var output = document.getElementById("map");
       if (!navigator.geolocation){
         output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
         return;
       }
       function success(position) {
         var latitude  = position.coords.latitude;
         var longitude = position.coords.longitude;
         var myLatLng = {lat: latitude, lng: longitude};
         // Create a map object and specify the DOM element for display.
          map = new google.maps.Map(document.getElementById('map'), {
           center: myLatLng,
           scrollwheel: false,
           zoom: 15,
         });
         var marker = new google.maps.Marker({
           map: map,
           position: myLatLng,
         });
       seeMap();
       getGyms(position.coords);
     }
     function error() {
       $('#map').html("Unable to retrieve your location");
     };
     navigator.geolocation.getCurrentPosition(success, error);
   }

  function seeMap(){
    $('#map').html('');
    $('html, body').animate({
      scrollTop: $("#map").offset().top
    }, 1000);
  }
  // function findUser() {
  //   var output = document.getElementById("map");
  //   if (!navigator.geolocation){
  //     output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
  //     return;
  //   }
  //   function success(position) {
  //     var latitude  = position.coords.latitude;
  //     var longitude = position.coords.longitude;
  //     var myLatLng = {lat: latitude, lng: longitude};
  //     // Create a map object and specify the DOM element for display.
  //     var map = new google.maps.Map(document.getElementById('map'), {
  //       center: myLatLng,
  //       scrollwheel: false,
  //       zoom: 15,
  //     });
  //     var marker = new google.maps.Marker({
  //       map: map,
  //       position: myLatLng,
  //     });
  //     getGyms(latitude,longitude);
  //   };
  //   function error() {
  //     $('#map').html("Unable to retrieve your location");
  //   };
  //   navigator.geolocation.getCurrentPosition(success, error);
  // }

  function getGyms(result){
    $.get("https://api.foursquare.com/v2/venues/search?ll="+ result.latitude + "," + result.longitude + "&intent=browse&radius=300&categoryId=4bf58dd8d48988d175941735&v=20160621",
    function(data, status){
      // oauth_token=AIG3KVDPZUNIT1PKK3CW2NCKPS51KDRTKLXNU3IFX1GUGFQA&v=20160324
      venueList(data.response.venues);
      makeMarkers(data.response.venues);
    })
  }
  function venueList(venues) {
    venues.forEach(function(venue){
      var name = document.createElement('h2');
      $(name).html(venue.name);
      $('#list').append(name);
    })
  }
  function makeMarkers(pins){
    for (var i = 0; i < pins.length; i++) {
      var venueLat  = pins[i].location.lat;
      var venueLong = pins[i].location.lng;
      var marker = new google.maps.Marker({
        position: {lat: venueLat, lng: venueLong},
        map: map
            });
          }
      }
  })
