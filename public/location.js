$(document).ready(function(){
  initMap();

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
          map = new google.maps.Map(document.getElementById('map'), {
           center: myLatLng,
           scrollwheel: false,
           zoom: 16,
         });
         var marker = new google.maps.Marker({
           map: map,
           position: myLatLng,
         });
       getGyms(position.coords);
     }
     function error() {
       $('#map').html("Unable to retrieve your location");
     };
     navigator.geolocation.getCurrentPosition(success, error);
   }
$('#homeButton').on('click',function(){
     seeMap();
   })
  function seeMap(){
    $('html, body').animate({
      scrollTop: $("#map").offset().top
    }, 1000);
  }
  function getGyms(result){
    $.get(`https://api.foursquare.com/v2/venues/search?ll=${result.latitude}, ${result.longitude}&intent=browse&radius=1000&categoryId=4bf58dd8d48988d175941735&oauth_token=AIG3KVDPZUNIT1PKK3CW2NCKPS51KDRTKLXNU3IFX1GUGFQA&v=20160621`,
    function(data, status){
      venueList(data.response.venues);
      makeMarkers(data.response.venues);
    })
  }
  function venueList(venues) {
    venues.forEach(function(venue){
      var name = document.createElement('h2');
      name.id = venue.id;
      $(name).html(venue.name);
      getVenueUrl(venue.id).done(function (venue) {
        var url = venue.response.venue.canonicalUrl;
        var link = document.createElement('a');
        link.href = url;
        $(link).html(name)
        $('.venues').append(link);
        return venue.response.venue.canonicalUrl
    })
  })
}
  function getVenueUrl(id) {
    return $.get(`https://api.foursquare.com/v2/venues/${id}?oauth_token=AIG3KVDPZUNIT1PKK3CW2NCKPS51KDRTKLXNU3IFX1GUGFQA&v=20160623`);
    }
  function makeMarkers(pins){
    for (var i = 0; i < pins.length; i++) {
      var venueLat  = pins[i].location.lat;
      var venueLong = pins[i].location.lng;
      var venueName = pins[i].name;
      var marker = new google.maps.Marker({
        position: {lat: venueLat, lng: venueLong},
        map: map,
        icon: 'icon.png',
        html: venueName
      });
      google.maps.event.addListener(marker, 'hover', function () {
        infowindow.setContent(this.html);
        infowindow.open(map, this);
        });
      }
      var contentString = `<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">${venueName}</h1></div></div>`;
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
    }
  });
