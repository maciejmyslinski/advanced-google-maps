/* global google */

'use strict';

var defaultZoom = 10;
var defaultStyles = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [{ saturation: 36 }, { color: '#000000' }, { lightness: 40 }],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [{ visibility: 'on' }, { color: '#000000' }, { lightness: 16 }],
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [{ color: '#000000' }, { lightness: 20 }],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#000000' }, { lightness: 17 }, { weight: 1.2 }],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ color: '#000000' }, { lightness: 20 }],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#000000' }, { lightness: 21 }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#000000' }, { lightness: 17 }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#000000' }, { lightness: 29 }, { weight: 0.2 }],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{ color: '#000000' }, { lightness: 18 }],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [{ color: '#000000' }, { lightness: 16 }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#000000' }, { lightness: 19 }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#000000' }, { lightness: 17 }],
  },
];

(function() {
  function advancedGoogleMaps() {
    var defaultPosition = new google.maps.LatLng(40.67, -73.94); // New York
    var mapElements = document.getElementsByClassName(
      'js-advanced-google-maps'
    );

    for (var i = 0; i < mapElements.length; i++) {
      var mapElement = mapElements.item(i);
      var zoom = Number(mapElement.dataset.zoom) || defaultZoom;
      var address = mapElement.dataset.address;
      var geocoder = new google.maps.Geocoder();
      var styles;

      try {
        styles = JSON.parse(mapElement.dataset.styles);
      } catch (error) {
        styles = defaultStyles;
      }

      geocoder.geocode(
        {
          address: address,
        },
        function(results, status) {
          var position;

          try {
            position = results[0].geometry.location;
          } catch (error) {
            if (status !== 'OK') {
              console.error('Provided address', address, 'is invalid', status);
            } else {
              console.error('Provided address', address, 'could not be found');
            }
            position = defaultPosition;
          }

          renderMap(position);
        }
      );

      function renderMap(position) {
        var mapOptions = {
          zoom: zoom,
          disableDefaultUI: true,
          center: position,
          styles: styles || defaultStyles,
        };

        var map = new google.maps.Map(mapElement, mapOptions);
        new google.maps.Marker({
          position: position,
          map: map,
        });
      }
    }
  }
  window.advancedGoogleMaps = advancedGoogleMaps;
})();
