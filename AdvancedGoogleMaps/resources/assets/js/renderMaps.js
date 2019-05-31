/* global google */

'use strict';

var defaultZoom = 10;

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
          styles: styles,
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
