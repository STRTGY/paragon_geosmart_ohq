import * as L from "npm:leaflet";

export default function createMap(container, geoJsonDataList = []) {
  // Create map instance
  const map = L.map(container, {
    fullscreenControl: true,
    zoomControl: false  // We'll add this control separately
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // Add zoom control to the top-right corner
  L.control.zoom({ position: 'topright' }).addTo(map);

  // Add scale control
  L.control.scale().addTo(map);

  if (geoJsonDataList.length > 0) {
    // Create a feature group to hold all GeoJSON layers
    const featureGroup = L.featureGroup().addTo(map);

    // Create an object to store all layers
    const layers = {};

    // Define an array of colors for different layers
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#800000', '#008000', '#000080', '#808000', '#800080', '#008080'];

    // Add each GeoJSON dataset
    geoJsonDataList.forEach((geoJsonData, index) => {
      const layerName = geoJsonData.name || `Unnamed Layer ${index + 1}`;
      const color = colors[index % colors.length];  // Cycle through colors

      const geoJsonLayer = L.geoJSON(geoJsonData, {
        pointToLayer: (feature, latlng) => {
          return L.circleMarker(latlng, {
            radius: 8,
            fillColor: color,
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
          });
        },
        style: (feature) => {
          return {
            color: color,
            weight: 2,
            opacity: 1,
            fillColor: color,
            fillOpacity: 0.7
          };
        }
      }).bindPopup(layer => `<b>${layer.feature.properties.title || layer.feature.properties.Name || layerName}</b>`)
        .addTo(featureGroup);
      
      layers[layerName] = geoJsonLayer;

      // Center the map on the first layer
      if (index === 0) {
        const bounds = geoJsonLayer.getBounds();
        map.fitBounds(bounds, {
          padding: [50, 50], // Add some padding around the bounds
          maxZoom: 18        // Prevent too much zoom on small areas
        });
      }
    });

    // Add layer control
    L.control.layers(null, layers, { position: 'topright' }).addTo(map);
  } else {
    // If no GeoJSON data, set a default view
    map.setView([22.1565, -100.9855], 12); // Center on San Luis Potosí, México with zoom level 12
  }

  return map;
}