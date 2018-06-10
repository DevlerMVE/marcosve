var map;
var markers = [];
var santiago = {lat: -34.397, lng: 150.644};
var pos_actual;
var panorama;

//flags
var gps_active=true;
var traffic_active=false;
var transit_active=false;
var street_active=false;
/**
 * The CenterControl adds a control to the map that recenters the map on santiago.
 * This constructor takes the control DIV as an argument.
 * @constructor
 */
function CenterControl(controlDiv, map) {

	// Set CSS for the control border.
	var controlUI = document.createElement('div');
	controlUI.className='fixed-action-btn';
	controlUI.style.bottom='45px';
	controlUI.style.right='24px';
	controlUI.style.width='90px';
	controlDiv.appendChild(controlUI);

	// set element a
	var controlLink = document.createElement('a');
	controlLink.className='btn-floating btn-large red';

	//element icon
	var icon = document.createElement('img');
	icon.src='./img/ic_add.png';
	icon.className='more';
	controlLink.appendChild(icon);


	// Set CSS for the control interior.
	var controlList = document.createElement('ul');
	controlList.style.paddingLeft='10px';


	//create list
	var listOne = document.createElement('li');
	var icon_street = document.createElement('img');

	var listTwo = document.createElement('li');
	var icon_transit  = document.createElement('img');

	var listThree = document.createElement('li');
	var icon_traffic  = document.createElement('img');

	var listFor = document.createElement('li');
	var icon_gps  = document.createElement('img');

	//street view
	listOne.className='btn-floating red';
	icon_street.src='./img/ic_streetview.png';
	icon_street.className='icon-list gps';
	listOne.appendChild(icon_street);

	//transit
	listTwo.className='btn-floating yellow darken-1';
	icon_transit.src='./img/ic_transit.png';
	icon_transit.className='icon-list gps';
	listTwo.appendChild(icon_transit);

	//traffic
	listThree.className='btn-floating green';
	icon_traffic.src='./img/ic_traffic.png';
	icon_traffic.className='icon-list gps';
	listThree.appendChild(icon_traffic);

	//geolocation
	listFor.className='btn-floating blue';
	icon_gps.src='./img/ic_gps_off.png';
	icon_gps.className='icon-list gps';
	listFor.appendChild(icon_gps);

	controlList.appendChild(listOne);
	controlList.appendChild(listTwo);
	controlList.appendChild(listThree);
	controlList.appendChild(listFor);

	controlUI.appendChild(controlList);
	controlUI.appendChild(controlLink);


	// Setup the click event listeners
	listFor.addEventListener('click', function() {
		if(gps_active){
			gps_active=false;
			setMapOnAll(null);
			icon_gps.src='./img/ic_gps.png';
		}else{
			gps_active=true;
			icon_gps.src='./img/ic_gps_off.png';
			getLocation();
		}
	});

	listThree.addEventListener('click',function(){
		if(!traffic_active){
			setTrafficLayer(map);
			traffic_active=true;
		}else{
			trafficLayer.setMap(null);
			traffic_active=false;
		}
	});

	listTwo.addEventListener('click',function(){
		if(!transit_active){
			setTransitLayer(map);
			transit_active=true;
		}else{
			transitLayer.setMap(null);
			transit_active=false;
		}
	});

	listOne.addEventListener('click',function(){
		if(!street_active){
			street_active=true;
			document.getElementById('streetview').style.display='block';
			//start streetview
			initStreetView();
		}else{
			street_active=false;
			document.getElementById('streetview').style.display='none';
		}
	});
}
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: santiago,
		zoom: 3,
		minZoom:3,
		mapTypeControl: true,
		scrollwheel: false,
		navigationControl: false,
		scaleControl: false,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			position: google.maps.ControlPosition.RIGHT_TOP
		},
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		streetViewControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM
		}
	});

	// Create the DIV to hold the control and call the CenterControl() constructor
	// passing in this DIV.
	var centerControlDiv = document.createElement('div');
	var centerControl = new CenterControl(centerControlDiv, map);

	var streetControlDiv = document.createElement('div');
	streetControlDiv.id='streetview';
	streetControlDiv.className='streetview card';
	streetControlDiv.innerHTML='<div class="card hoverable"><div class="card-image">'+
		'<div id="street-view" class="view overlay hm-white-slight z-depth-1">'+
		'</div>'+
		'</div>';

	streetControlDiv.index = 1;
	centerControlDiv.index = 1;
	map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(centerControlDiv);
	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(streetControlDiv);

	getLocation();
	findPlace();

}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
						  'Error: The Geolocation service failed.' :
						  'Error: Your browser doesn\'t support geolocation.');

}
function getLocation(){
	// Try HTML5 geolocation.
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			var marker = new google.maps.Marker({
				position: pos,
				map: map,
				title: 'Your actualy position'
			});
			markers.push(marker);
			map.setCenter(pos);

		}, function() {
			handleLocationError(true, infoWindow, map.getCenter());
		});


	}
}
// Sets the map on all markers in the array.
function setMapOnAll(map) {
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
	}
	if(map==null)pos=null;
}
//set traffic layer on the map
function setTrafficLayer(map){
	trafficLayer = new google.maps.TrafficLayer();
	map.setZoom(10);
	map.setCenter(pos);
	trafficLayer.setMap(map);
}
//set traffic layer on the map
function setTransitLayer(map){
	transitLayer = new google.maps.TransitLayer();
	transitLayer.setMap(map);
}

function initStreetView() {
	panorama = new google.maps.StreetViewPanorama(
		document.getElementById('street-view'),
		{
			position: pos_actual,
			pov: {heading: 165, pitch: 0},
			zoom: 1
		});
}

function findPlace(){
	// Create the search box and link it to the UI element.
	var input = document.getElementById('pac-input');
	var searchBox = new google.maps.places.SearchBox(input);
	//map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

	// Bias the SearchBox results towards current map's viewport.
	map.addListener('bounds_changed', function() {
		searchBox.setBounds(map.getBounds());
	});
	var markers = [];
	// [START region_getplaces]
	// Listen for the event fired when the user selects a prediction and retrieve
	// more details for that place.
	searchBox.addListener('places_changed', function() {
		var places = searchBox.getPlaces();

		if (places.length === 0) {
			return;
		}

		// Clear out the old markers.
		markers.forEach(function(marker) {
			marker.setMap(null);
		});
		markers = [];

		// For each place, get the icon, name and location.
		var bounds = new google.maps.LatLngBounds();
		places.forEach(function(place) {
			var icon = {
				url: place.icon,
				size: new google.maps.Size(71, 71),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(17, 34),
				scaledSize: new google.maps.Size(25, 25)
			};

			// Create a marker for each place.
			markers.push(new google.maps.Marker({
				map: map,
				icon: icon,
				title: place.name,
				position: place.geometry.location
			}));

			if (place.geometry.viewport) {
				// Only geocodes have viewport.
				bounds.union(place.geometry.viewport);
			} else {
				bounds.extend(place.geometry.location);
			}
		});
		map.fitBounds(bounds);
		pos_actual = places[0].geometry.location;
	});
	// [END region_getplaces]
}
