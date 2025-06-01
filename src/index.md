---
title: Paragon | Geosmart AI for Real State
toc: false
index: false
keywords: geointeligencia, framework, STRTGY, EVA, metodología, análisis territorial, IA
---

# Paragon | Geosmart AI for Real State

# Marco de Análisis Geoestadístico

```js
import mapboxgl from "npm:mapbox-gl";
```

```js
const Hospital_CV = FileAttachment("/data/gis/Hospital_CV.geojson").json();
```

```js
const cities = [
  { name: "Ciudad Valles", location: [-99.0109, 21.9963] },
  { name: "San Luis Potosí", location: [-100.863590, 22.076408] },
  { name: "Querétaro", location: [-100.3899, 20.5888] },
  { name: "Monterrey", location: [-100.3161, 25.6866] },
  { name: "Tamuín", location: [-98.7797, 22.0055] },
];

const city = view(
  Inputs.select(cities, {
    label: "Ciudad a analizar",
    format: (t) => t.name,
    value: cities.find((t) => t.name === "Ciudad Valles")
  })
);
```

```js
const showHeatmap = view(
  Inputs.checkbox([
    "heatmap"
  ], { label: "Mostrar mapa de calor de hospitales", value: ["heatmap"] })
);
```

```js
const div = display(document.createElement("div"));
div.style = "height: 800px;";

const map = new mapboxgl.Map({
  container: div,
  accessToken: "pk.eyJ1IjoiZmVpcG93ZXIiLCJhIjoiY21hbjd5bnQ4MG93NTJsc2Z3dzdzNnRiNiJ9.942M6p7lPTB0M2wU4p7cHg", 
  style: 'mapbox://styles/feipower/cman7dnzb01i601s3e0xua814',
  center: city.location, 
  zoom: 12
});

map.on('load', () => {
  // Añadir fuente de datos para hospitales
  map.addSource('Hospitales_CV', {
    type: 'geojson',
    data: Hospital_CV
  });
  
  // Añadir capa de mapa de calor para hospitales
  map.addLayer({
    id: 'hospitales-heat',
    type: 'heatmap',
    source: 'Hospitales_CV',
    maxzoom: 15,
    paint: {
      // Peso uniforme para cada punto
      'heatmap-weight': 1,
      
      // Intensidad ajustada según nivel de zoom
      'heatmap-intensity': {
        stops: [
          [11, 1],
          [15, 3]
        ]
      },
      
      // Escala de colores para la densidad
      'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0, 'rgba(13,71,161,0)',
        0.8, 'rgb(183,28,28)'
      ],
      
      // Radio del heatmap según zoom
      'heatmap-radius': {
        stops: [
          [11, 15],
          [15, 20]
        ]
      },
      
      // Opacidad del heatmap
      'heatmap-opacity': {
        default: 1,
        stops: [
          [14, 1],
          [15, 0.8]
        ]
      }
    }
  });
  
  // Añadir capa de puntos para hospitales
  map.addLayer({
    id: 'hospitales-points',
    type: 'circle',
    source: 'Hospitales_CV',
    minzoom: 14,
    paint: {
      'circle-radius': [
        'interpolate', ['linear'], ['zoom'],
        14, 3,
        18, 8
      ],
      'circle-color': '#E23838',
      'circle-stroke-color': '#FFFFFF',
      'circle-stroke-width': 1,
      'circle-opacity': [
        'interpolate', ['linear'], ['zoom'],
        14, 0,
        15, 1
      ]
    }
  });
  
  // Configurar popup para mostrar información al hacer clic en un hospital
  map.on('click', 'hospitales-points', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const properties = e.features[0].properties;
    
    // Crear contenido del popup con la información del hospital
    const popupContent = `
      <div>
        <h3>${properties.title || 'Centro Médico'}</h3>
        <p>${properties.label || ''}</p>
        <p>Distancia: ${properties.distance ? (properties.distance / 1000).toFixed(2) + ' km' : 'No disponible'}</p>
        <p>Categoría: ${properties.categories ? properties.categories.split(';')[0].replace(/^\d+-\d+-\d+$/, 'General') : 'No especificada'}</p>
      </div>
    `;
    
    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(popupContent)
      .addTo(map);
  });
  
  // Cambiar el cursor al pasar sobre un hospital
  map.on('mouseenter', 'hospitales-points', () => {
    map.getCanvas().style.cursor = 'pointer';
  });
  
  map.on('mouseleave', 'hospitales-points', () => {
    map.getCanvas().style.cursor = '';
  });
  
  // Configurar controles del mapa
  const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  });
  map.addControl(geolocate, 'bottom-right');
  
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, 'bottom-right');
  
  const scale = new mapboxgl.ScaleControl({
    maxWidth: 300,
    unit: 'metric'
  });
  map.addControl(scale, 'bottom-left');
  
  const fullscreen = new mapboxgl.FullscreenControl();
  map.addControl(fullscreen, 'bottom-right');

  // Custom Zoom Indicator Control
  class ZoomIndicator {
    onAdd(map) {
      this._map = map;
      this._container = document.createElement('div');
      this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
      this._container.style.background = 'rgba(255,255,255,0.8)';
      this._container.style.font = 'bold 16px sans-serif';
      this._container.style.padding = '4px 10px';
      this._container.style.margin = '10px';
      this._container.innerText = `Zoom: ${map.getZoom().toFixed(2)}`;
      map.on('zoom', () => {
        this._container.innerText = `Zoom: ${map.getZoom().toFixed(2)}`;
      });
      return this._container;
    }
    onRemove() {
      this._container.parentNode.removeChild(this._container);
      this._map = undefined;
    }
  }
  map.addControl(new ZoomIndicator(), 'top-right');
  
  // Configurar visibilidad inicial del heatmap
  updateHeatmapVisibility();
});

// Función para actualizar la visibilidad del heatmap
function updateHeatmapVisibility() {
  if (map.getLayer('hospitales-heat')) {
    map.setLayoutProperty(
      'hospitales-heat',
      'visibility',
      showHeatmap.includes("heatmap") ? 'visible' : 'none'
    );
  }
}

// Retornar el mapa para uso en otras celdas
map;
```

```js
// Reactivamente actualizar la visibilidad del heatmap cuando cambie el checkbox
{
  if (map && map.getLayer && map.getLayer('hospitales-heat')) {
    map.setLayoutProperty(
      'hospitales-heat',
      'visibility',
      showHeatmap.includes("heatmap") ? 'visible' : 'none'
    );
  }
}
```
