//display coordinates onthe console
//display on the browser the coordinates as text in the correct form


console.log('geonet');

$(document).ready(function(){
	//accessing key from json file
	// var myKey = JSON.parse(apiKey);
	// console.log(myKey[0]);
	// myKey = myKey[0].key;
	// console.log(myKey);

//google maps api key
var myKey = JSON.parse(apiKey);
console.log(myKey);

var script = document.createElement('script');
script.src='https://maps.googleapis.com/maps/api/js?key='+ myKey[0].key;
document.getElementsByTagName('body')[0].appendChild(script);

	$.ajax({
	  url : 'https://api.geonet.org.nz/intensity?type=reported',
		type :'GET',
		dataType :'json', // for geonet dataType do not get 400 error
		success:function(data){
			console.log(data);
      console.log(JSON.stringify(data.features[0].geometry.coordinates[0]));
      console.log(typeof(JSON.stringify(data.features[0].geometry.coordinates[0])));
      console.log(JSON.stringify(data.features[0].geometry.coordinates[1]));
      console.log(typeof(JSON.stringify(data.features[0].geometry.coordinates[1])));
      initMap(data);

		}, error:function(){
			console.log('error');
		}

	});//ajax
}); //document ready

// <script async defer
// src="https://maps.googleapis.com/maps/api/js?key=" + myKey&callback=initMap">
// </script>


function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}