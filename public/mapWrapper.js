const MapWrapper = function(container, coords, zoom){
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  // tiles-tileLayer construct tiles, url-directory structure

  this.map = L.map(container).setView(coords, zoom).addLayer(osmLayer);
  this.map.on('click', event => this.addMarker(event.latlng));
}

MapWrapper.prototype.addMarker = function(coords){
  // debugger;
 L.marker(coords).addTo(this.map).bindPopup(coords.toString()).openPopup();


};

MapWrapper.prototype.recenterMap = function(coords){
this.map.panTo(coords);

};


//
// openPopup(<String|HTMLElement> content,
