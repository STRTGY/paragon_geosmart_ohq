---
title: Marco Análisis Geoestadístico
toc: false
index: true
keywords: inmobiliario, geoestadística, propiedades, ubicación, transacciones, DDD, análisis espacial, datos granulares, mercado inmobiliario
---

# Marco de Análisis Geoestadístico


```js
import mapboxgl from "npm:mapbox-gl";
```

```js
const cities = [
  { name: "Ciudad Valles", location: [-99.0109, 21.9963] },
  { name: "San Luis Potosí", location: [-100.9855, 22.1565] },
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
const div = display(document.createElement("div"));
div.style = "height: 800px;";

const map = new mapboxgl.Map({
  container: div,
  accessToken: "pk.eyJ1IjoiZmVpcG93ZXIiLCJhIjoiY21hbjd5bnQ4MG93NTJsc2Z3dzdzNnRiNiJ9.942M6p7lPTB0M2wU4p7cHg", // replace with your token, "pk.…"
  style: 'mapbox://styles/feipower/cman7dnzb01i601s3e0xua814',
  center: city.location, // starting position [longitude, latitude] - México
  zoom: 13
});
// Add controls

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'bottom-right');

const scale = new mapboxgl.ScaleControl({
  maxWidth: 500,
  unit: 'metric'
});

map.addControl(scale, 'bottom-left');
const fullscreen = new mapboxgl.FullscreenControl();
map.addControl(fullscreen, 'bottom-right');

const geolocate = new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
    });

map.addControl(geolocate, 'bottom-right');   

invalidation.then(() => map.remove());
```

## Ciudad Valles, San Luis Potosí

### Hospital

### Comercial

### Vivienda

## San Luis Potosí, San Luis Potosí

## Tamuín, San Luis Potosí

## Monterrey, Nuevo León

## Querétaro, Querétaro

## 4. Modelo Conceptual y Dominio del Problema (DDD)

### Entidades Principales

- **Propiedad:**
  - Identificador único
  - Tipo de propiedad (residencial, comercial, industrial)
  - Superficie en metros cuadrados
  - Precio de mercado
  - Fecha de construcción/renovación
  - Uso del suelo permitido

- **Ubicación:**
  - Coordenadas geográficas (latitud, longitud)
  - Colonia o sector
  - Proximidad a transporte público
  - Accesibilidad a servicios básicos
  - Características del entorno

- **Transacción:**
  - Tipo (venta o renta)
  - Fecha de operación
  - Valor monetario
  - Tiempo de permanencia en el mercado
  - Condiciones especiales

```js
import createMap from "../../components/simplemap.js";

const mtyCenter = [25.6866, -100.3161]; // Coordenadas aproximadas de Monterrey, NL
const mapContainer = document.createElement("div");
mapContainer.style.height = "60vh";
mapContainer.style.width = "100%";
display(mapContainer);

createMap(mapContainer, [], {
  center: mtyCenter,
  zoom: 12,
  tileLayer: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

```

---


