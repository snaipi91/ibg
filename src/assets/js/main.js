var $$ = $$ || {};

$$.initializers = {
	init: function () {
		console.log(1);
	},

	objectGallery: function() {
		$('.b-object-gallery .slider').owlCarousel({
			navigation : true,
			slideSpeed: 300,
			pagination: false,
			paginationSpeed: 400,
			singleItem: true,
			navigationText: []
		});
	},

	objectGalleryMap: function() {
		function initialize() {
			var mapCanvas = document.getElementById('map');
			var LatLng = new google.maps.LatLng(55.761548, 37.624413);
			var mapOptions = {
				center: LatLng,
				zoom: 17,
				disableDefaultUI: true,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(mapCanvas, mapOptions);

			var marker = new google.maps.Marker({
				position: LatLng
			});

			map.set('styles', [
				{
					"featureType": "all",
					"elementType": "all",
					"stylers": [{"weight": "1"}, {"visibility": "off"}]
				}, {"featureType": "all", "elementType": "geometry", "stylers": [{"color": "#00b6cd"}]}, {
					"featureType": "all",
					"elementType": "geometry.stroke",
					"stylers": [{"visibility": "on"}, {"weight": ".5"}]
				}, {"featureType": "all", "elementType": "labels", "stylers": [{"visibility": "on"}]}, {
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [{"color": "#ffffff"}, {"visibility": "simplified"}]
				}, {
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [{"visibility": "simplified"}, {"color": "#3e606f"}, {"weight": 2}, {"gamma": 0.84}]
				}, {
					"featureType": "all",
					"elementType": "labels.icon",
					"stylers": [{"visibility": "off"}]
				}, {
					"featureType": "administrative",
					"elementType": "geometry",
					"stylers": [{"weight": 0.6}, {"color": "#00b6cd"}]
				}, {
					"featureType": "administrative.land_parcel",
					"elementType": "all",
					"stylers": [{"visibility": "simplified"}]
				}, {
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [{"color": "#00c1d6"}, {"visibility": "on"}]
				}, {
					"featureType": "poi.attraction",
					"elementType": "geometry.fill",
					"stylers": [{"color": "#00b6cd"}]
				}, {
					"featureType": "poi.business",
					"elementType": "geometry",
					"stylers": [{"color": "#00b6cd"}]
				}, {
					"featureType": "poi.government",
					"elementType": "geometry",
					"stylers": [{"color": "#00b6cd"}]
				}, {
					"featureType": "poi.medical",
					"elementType": "geometry",
					"stylers": [{"color": "#00b6cd"}]
				}, {
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [{"weight": "1.00"}, {"color": "#00b6cd"}]
				}, {
					"featureType": "poi.place_of_worship",
					"elementType": "geometry",
					"stylers": [{"color": "#00b6cd"}]
				}, {
					"featureType": "poi.school",
					"elementType": "geometry",
					"stylers": [{"color": "#00b6cd"}]
				}, {
					"featureType": "poi.sports_complex",
					"elementType": "geometry.fill",
					"stylers": [{"color": "#00b6cd"}]
				}, {
					"featureType": "road",
					"elementType": "all",
					"stylers": [{"color": "#00a6bb"}, {"visibility": "on"}]
				}, {
					"featureType": "road",
					"elementType": "geometry.stroke",
					"stylers": [{"visibility": "simplified"}]
				}, {
					"featureType": "road",
					"elementType": "labels",
					"stylers": [{"visibility": "on"}, {"color": "#fafafa"}]
				}, {
					"featureType": "road",
					"elementType": "labels.text.fill",
					"stylers": [{"visibility": "on"}]
				}, {
					"featureType": "road",
					"elementType": "labels.text.stroke",
					"stylers": [{"visibility": "off"}]
				}, {
					"featureType": "road",
					"elementType": "labels.icon",
					"stylers": [{"visibility": "on"}]
				}, {
					"featureType": "road.highway",
					"elementType": "labels.icon",
					"stylers": [{"visibility": "off"}]
				}, {
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [{"visibility": "off"}]
				}, {
					"featureType": "road.local",
					"elementType": "labels.icon",
					"stylers": [{"visibility": "off"}]
				}, {
					"featureType": "transit",
					"elementType": "geometry",
					"stylers": [{"color": "#027184"}]
				}, {
					"featureType": "water",
					"elementType": "geometry.fill",
					"stylers": [{"color": "#03778a"}, {"visibility": "on"}]
				}
			]);
			marker.setMap(map);
		}

		google.maps.event.addDomListener(window, 'load', initialize);
	}
};

$(function () {
	$$.window = $(window);
	$$.windowWidth = $$.window.width();
	$$.windowHeight = $$.window.height();

	$$.body = $('body');

	$$.window.resize(function () {
		$$.windowWidth = $$.window.width();
		$$.windowHeight = $$.window.height();
	});

	_.each($$.initializers, function (initializer) {
		initializer.call();
	});
});

