
const app = function(){

  // variables as arguments into our methods
  let coords = [55.859330, -3.991304]
  let india = [31.127019, 75.481773]
  let chicago = [41.878114, -87.629798]
  let zoom = 15;
  let containerID = 'main-map'

  const mainMap = new MapWrapper(containerID, coords, zoom);
  mainMap.addMarker(coords);
  mainMap.addMarker(india);

  //
  // Add a button below the map that says 'Take me to Chicago' (or another city)
  // which moves the centre of the map to be the co-ordinates of that city.

  var button = document.querySelector('button');
  button.addEventListener('click', mainMap.recenterMap(chicago));

}

//
// Add an Info Window to one of the markers on your map (see the Leaflet documentation)
// with some information about the place it's marking.




window.addEventListener('DOMContentLoaded', app);
