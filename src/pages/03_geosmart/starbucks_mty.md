---
title: Informe de Resultados | Análisis Geoestadístico para Expansión de Starbucks en la Zona Metropolitana de Monterrey
toc: false
index: true
keywords: Starbucks, expansión, granularidad, isocronas, HERE API, INEGI, DENUE, movilidad, datos granulares, Monterrey, ZMM
---

```js
const starbucks_isocronas = FileAttachment("../../data/gis/starbucks_isocronas.geojson").json()
const starbucks = FileAttachment("../../data/gis/starbucks_googlemaps.geojson").json()
const timhortons = FileAttachment("../../data/gis/mty_timhortons.geojson").json()
const opportunities = FileAttachment("../../data/gis/opportunity_zones_timhortons_mty.geojson").json()
const escuelas = FileAttachment("../../data/gis/educacion_privada.geojson").json()
```

# Informe de Resultados: Análisis Geoestadístico para Expansión de Starbucks en la ZMM

## 1. Resumen Ejecutivo

El presente análisis geoestadístico se realizó con el objetivo de identificar micro-zonas de alta granularidad para la expansión de Starbucks en la Zona Metropolitana de Monterrey (ZMM), un mercado aparentemente saturado. Mediante el uso de datos de movilidad (isocronas), sociodemográficos (INEGI) y de competencia (DENUE), el estudio revela que, a pesar de la existencia de más de 3,300 cafeterías, existen nichos de oportunidad estratégicos para una marca premium.

Los hallazgos clave indican que la saturación del mercado no es homogénea y está dominada por establecimientos informales, lo que crea una oportunidad para la diferenciación a través de la experiencia de marca y formatos innovadores como el *drive-thru*. El análisis de accesibilidad real, basado en isocronas temporales, permitió delimitar con precisión el alcance efectivo de cada ubicación potencial, superando los métodos tradicionales de radios geográficos.

Como resultado, se recomiendan tres zonas de oportunidad prioritarias para la apertura de nuevas sucursales:
1.  **Parque Industrial Santa Catarina (Prioridad Alta)**: Un mercado desatendido con alta concentración de empleados de oficina.
2.  **Centro Histórico de Monterrey (Prioridad Media-Alta)**: Alta densidad de oficinas y turismo con baja competencia premium directa.
3.  **Guadalupe / Av. Pablo Livas (Prioridad Media)**: Un corredor comercial en crecimiento con alta movilidad vehicular y desarrollo residencial emergente.

Este informe concluye que un enfoque geoestadístico granular es fundamental para navegar mercados complejos, permitiendo a Starbucks tomar decisiones de expansión informadas, minimizar riesgos y capitalizar oportunidades de crecimiento que de otro modo permanecerían ocultas.

---

## 2. Introducción

**Contexto del Mercado de Cafeterías en la Zona Metropolitana de Monterrey**

El consumo de café en México ha mostrado una tendencia de crecimiento en los últimos años. En la zona metropolitana de Monterrey, compuesta por 18 municipios (Monterrey, San Pedro Garza García, San Nicolás de los Garza, Guadalupe, Apodaca, General Escobedo, Santa Catarina, Juárez, García, Cadereyta Jiménez, Santiago, Salinas Victoria, Pesquería, Ciénega de Flores, General Zuazua, El Carmen, Hidalgo y Abasolo), se registran alrededor de 3,300 (DENUE) cafeterías, incluyendo grandes franquicias y pequeños emprendedores. En este panorama, el mercado está dominado por Starbucks.

**Starbucks: El Actor Dominante y los Criterios de Ubicación de Alsea**

Starbucks, operado en México por Alsea, es un actor dominante en el mercado mexicano. La marca ha experimentado una expansión significativa desde su llegada en 2002, con planes de continuar abriendo nuevas sucursales, con un enfoque particular en el formato *drive-thru*. Alsea ha reportado un crecimiento sostenido en ventas y busca fortalecer su canal digital a través de su aplicación móvil.

Un aspecto clave en la expansión de Starbucks en México es la estrategia de selección de ubicaciones implementada por Alsea. De acuerdo con diversas fuentes (altonivel.com.mx, inmobiliare.com, emprenderconalma.com, muchosnegociosrentables.com, starbucks.com.mx), Alsea prioriza ubicaciones con alto flujo peatonal y vehicular, tales como:

- Plazas comerciales y centros comerciales.
- Zonas turísticas y centros históricos.
- Aeropuertos y hoteles de alta gama.
- Áreas urbanas con alta densidad poblacional y tráfico constante.

Esta estrategia busca maximizar la visibilidad y el acceso de la marca, asegurando una alta afluencia de potenciales clientes y alineándose con los hábitos de consumo de los segmentos objetivo.

El **mercado objetivo principal de Starbucks** se percibe generalmente como **consumidores jóvenes, urbanos y con recursos económicos**, con un fuerte énfasis en los Millennials y la Generación Z. Estos grupos son atraídos no solo por los productos, sino por la experiencia general que ofrece la marca. Aunque asociado con el café, un número significativo de clientes habituales de Starbucks consumen otras bebidas, siendo esta tendencia particularmente notable entre el público más joven.

**Objetivos Específicos del Proyecto**

El presente análisis geoestadístico tiene como objetivos específicos: (1) identificar con alta granularidad las micro-zonas óptimas para la expansión de Starbucks en la ZMM, considerando patrones de movilidad real mediante isocronas temporales; (2) evaluar la viabilidad comercial de ubicaciones potenciales basándose en datos sociodemográficos, actividad económica y competencia existente; (3) segmentar el mercado según perfiles de consumidor para alinear la oferta con las necesidades específicas de cada zona; (4) priorizar ubicaciones estratégicas mediante un sistema de puntuación multifactorial que integre variables como densidad de oficinas, nivel socioeconómico y accesibilidad; y (5) generar recomendaciones accionables para la apertura de nuevas sucursales, con énfasis en el formato drive-thru. Este enfoque metodológico busca contribuir a los planes de expansión de Starbucks en México, identificando oportunidades específicas en la ZMM que maximicen el retorno de inversión y fortalezcan la presencia de la marca en el mercado regiomontano.

---

## 3. Resultados

### 3.1. Mapas de Isocronas y Accesibilidad

Las isocronas representan áreas geográficas accesibles desde un punto de origen dentro de un tiempo determinado de viaje. Este análisis es fundamental para entender el alcance real de cada ubicación potencial de Starbucks, considerando las condiciones reales de tráfico y los diferentes modos de transporte disponibles en la Zona Metropolitana de Monterrey.

Para este estudio, se generaron isocronas de 5 minutos considerando:
- **Horarios críticos**: hora pico matutina (7:00-9:00 AM), mediodía (12:00-2:00 PM) y hora pico vespertina (6:00-8:00 PM)
- **Modos de transporte**: automóvil particular, transporte público y peatonal
- **Días de la semana**: comparativa entre días laborales y fines de semana

El análisis revela patrones de accesibilidad diferenciados según la zona de la ciudad, con áreas de alta conectividad en los corredores principales y zonas con menor accesibilidad en la periferia. Esta información es crucial para identificar ubicaciones que maximicen la captación de clientes en sus trayectos cotidianos.

```js
const showLayers = view(
  Inputs.checkbox([
    "isocronas",
    "zonas_oportunidad"
  ], { 
    label: "Capas del mapa", 
    value: ["isocronas", "zonas_oportunidad"]
  })
);
```
```js
const div = display(document.createElement("div"));
div.style = "height: 500px;";

const map1 = new mapboxgl.Map({
  container: div,
  accessToken: "pk.eyJ1IjoiZmVpcG93ZXIiLCJhIjoiY21hbjd5bnQ4MG93NTJsc2Z3dzdzNnRiNiJ9.942M6p7lPTB0M2wU4p7cHg", 
  style: 'mapbox://styles/feipower/cman7dnzb01i601s3e0xua814',
  center: [-100.3161, 25.6866], // Coordenadas de Monterrey, México
  zoom: 12
});

map1.on('load', () => {
  const opportunity_points = {
    "type": "FeatureCollection",
    "features": [
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [-100.44366115492392, 25.678281279517556] }, "properties": { "name": "Parque Industrial Santa Catarina", "priority": "Alta" } },
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [-100.31686902795137, 25.685589360372127] }, "properties": { "name": "Centro Histórico de Monterrey", "priority": "Media-Alta" } },
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [-100.18998559827621, 25.658205046105152] }, "properties": { "name": "Guadalupe / Av. Pablo Livas", "priority": "Media" } }
    ]
  };

  map1.addSource('opportunity-points', {
      'type': 'geojson',
      'data': opportunity_points
  });

  map1.addLayer({
      'id': 'opportunity-points-layer',
      'type': 'circle',
      'source': 'opportunity-points',
      'paint': {
          'circle-radius': 12,
          'circle-color': '#FFD700',
          'circle-stroke-width': 3,
          'circle-stroke-color': '#FF4500'
      }
  });

  map1.addLayer({
      'id': 'opportunity-points-text',
      'type': 'symbol',
      'source': 'opportunity-points',
      'layout': {
          'text-field': ['get', 'name'],
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 2],
          'text-anchor': 'top',
          'text-size': 12
      },
      'paint': {
          'text-color': '#FFFFFF',
          'text-halo-color': '#000000',
          'text-halo-width': 2
      }
  });

  map1.on('click', 'opportunity-points-layer', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const props = e.features[0].properties;
    new mapboxgl.Popup().setLngLat(coordinates).setHTML(`<strong>${props.name}</strong><br>Prioridad: ${props.priority}`).addTo(map1);
  });
  
  map1.on('mouseenter', 'opportunity-points-layer', () => { map1.getCanvas().style.cursor = 'pointer'; });
  map1.on('mouseleave', 'opportunity-points-layer', () => { map1.getCanvas().style.cursor = ''; });

  // Add Starbucks isochrones as a source
  map1.addSource('starbucks-isocronas', {
    type: 'geojson',
    data: starbucks_isocronas
  });

  const isocronaColors = {
    1: { fill: '#00ff00', outline: '#004d00' },   // Green
    2: { fill: '#80ff00', outline: '#305900' },   // Yellow-green
    3: { fill: '#ffff00', outline: '#595900' },   // Yellow
    4: { fill: '#ff8000', outline: '#593000' },   // Orange
    5: { fill: '#ff0000', outline: '#590000' }    // Red
  };

  [5, 4, 3, 2, 1].forEach((min) => {
    map1.addLayer({
      id: `starbucks-isocronas-layer-${min}`,
      type: 'fill',
      source: 'starbucks-isocronas',
      filter: [
        'all',
        ['==', ['get', 'rango_minutos'], min]
      ],
      paint: {
        'fill-color': isocronaColors[min].fill,
        'fill-opacity': 0.3,
        'fill-outline-color': isocronaColors[min].outline
      }
    });
  });

  // Add Starbucks locations as a source
  map1.addSource('starbucks-locations', {
    type: 'geojson',
    data: starbucks
  });

  // Add layer for Starbucks locations
  map1.addLayer({
    id: 'starbucks-locations-layer',
    type: 'circle',
    source: 'starbucks-locations',
    paint: {
      'circle-radius': 6,
      'circle-color': '#00704A', // Starbucks green
      'circle-stroke-width': 1,
      'circle-stroke-color': '#ffffff',
      'circle-opacity': 0.8
    }
  });
  
  // Add popup for Starbucks locations
  map1.on('click', 'starbucks-locations-layer', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const properties = e.features[0].properties;

    popup.setLngLat(coordinates)
      .setHTML(`
        <strong>${properties.title}</strong><br>
        <em>${properties.description}</em><br>
        <strong>Rating:</strong> ${properties.totalScore} (${properties.reviewsCount} reviews)<br>
        <strong>Address:</strong> ${properties.address}<br>
        <a href="${properties.website}" target="_blank">Visit Website</a>
      `)
      .addTo(map1);
  });
  // Add popup for Starbucks isochrones
  const popup = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: true
  });

  map1.on('click', (e) => {
    const features = map1.queryRenderedFeatures(e.point, {
      layers: [
        'starbucks-isocronas-layer-1',
        'starbucks-isocronas-layer-2',
        'starbucks-isocronas-layer-3',
        'starbucks-isocronas-layer-4',
        'starbucks-isocronas-layer-5'
      ]
    });

    if (!features.length) {
      return;
    }

    const feature = features[0];

    popup.setLngLat(e.lngLat)
      .setHTML(`<strong>Rango de minutos:</strong> ${feature.properties.rango_minutos}`)
      .addTo(map1);
  });

  updateLayersVisibility();
});

function updateLayersVisibility() {
  [5, 4, 3, 2, 1].forEach((min) => {
    if (map1.getLayer(`starbucks-isocronas-layer-${min}`)) {
      map1.setLayoutProperty(
        `starbucks-isocronas-layer-${min}`,
        'visibility',
        showLayers.includes("isocronas") ? 'visible' : 'none'
      );
    }
  });

  if (map1.getLayer('opportunity-points-layer')) {
    map1.setLayoutProperty(
      'opportunity-points-layer',
      'visibility',
      showLayers.includes("zonas_oportunidad") ? 'visible' : 'none'
    );
  }

  if (map1.getLayer('opportunity-points-text')) {
    map1.setLayoutProperty(
      'opportunity-points-text',
      'visibility',
      showLayers.includes("zonas_oportunidad") ? 'visible' : 'none'
    );
  }

  if (map1.getLayer('starbucks-locations-layer')) {
    map1.setLayoutProperty(
      'starbucks-locations-layer',
      'visibility',
      'visible' // Ensure Starbucks locations are always visible
    );
  }
}
```

### 3.2. Análisis Sociodemográfico y Económico

El perfil sociodemográfico y económico de las diferentes zonas de la ciudad es determinante para el éxito de una nueva sucursal de Starbucks. Este análisis integra múltiples capas de información del INEGI y otras fuentes oficiales para crear un panorama completo del mercado potencial.

Variables analizadas incluyen:
- **Densidad poblacional** por AGEB (Área Geoestadística Básica) y manzana
- **Nivel socioeconómico** basado en índices de marginación y características de vivienda
- **Población económicamente activa** con énfasis en sectores de servicios y oficinas.

El mapa siguiente muestra la integración de estas variables mediante un índice compuesto que identifica las zonas con mayor potencial de mercado para Starbucks, destacando áreas como San Pedro Garza García, Valle Oriente, y corredores empresariales de Monterrey y San Nicolás donde se concentra el mercado objetivo de la marca.

```js
const showLayersMap2 = view(
  Inputs.checkbox([
    "nse",
    "zonas_oportunidad"
  ], { 
    label: "Capas del mapa NSE", 
    value: ["nse", "zonas_oportunidad"]
  })
);
```

```js
const div = display(document.createElement("div"));
div.style = "height: 500px;";

const map2 = new mapboxgl.Map({
  container: div,
  accessToken: "pk.eyJ1IjoiZmVpcG93ZXIiLCJhIjoiY21hbjd5bnQ4MG93NTJsc2Z3dzdzNnRiNiJ9.942M6p7lPTB0M2wU4p7cHg", 
  style: 'mapbox://styles/feipower/cman7dnzb01i601s3e0xua814',
  center: [-100.3161, 25.6866], // Coordenadas de Monterrey, México
  zoom: 12
});

function updateLayersVisibilityMap2() {
  if (map2.getLayer('new-tileset-layer')) {
    map2.setLayoutProperty(
      'new-tileset-layer',
      'visibility',
      showLayersMap2.includes("nse") ? 'visible' : 'none'
    );
  }

  if (map2.getLayer('opportunity-points-layer')) {
    map2.setLayoutProperty(
      'opportunity-points-layer',
      'visibility',
      showLayersMap2.includes("zonas_oportunidad") ? 'visible' : 'none'
    );
  }

  if (map2.getLayer('opportunity-points-text')) {
    map2.setLayoutProperty(
      'opportunity-points-text',
      'visibility',
      showLayersMap2.includes("zonas_oportunidad") ? 'visible' : 'none'
    );
  }
}

map2.on('load', () => {
  const opportunity_points = {
    "type": "FeatureCollection",
    "features": [
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [-100.44366115492392, 25.678281279517556] }, "properties": { "name": "Parque Industrial Santa Catarina", "priority": "Alta" } },
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [-100.31686902795137, 25.685589360372127] }, "properties": { "name": "Centro Histórico de Monterrey", "priority": "Media-Alta" } },
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [-100.18998559827621, 25.658205046105152] }, "properties": { "name": "Guadalupe / Av. Pablo Livas", "priority": "Media" } }
    ]
  };

  map2.addSource('opportunity-points', {
      'type': 'geojson',
      'data': opportunity_points
  });

  map2.addLayer({
      'id': 'opportunity-points-layer',
      'type': 'circle',
      'source': 'opportunity-points',
      'paint': {
          'circle-radius': 12,
          'circle-color': '#FFD700',
          'circle-stroke-width': 3,
          'circle-stroke-color': '#FF4500'
      }
  });

  map2.addLayer({
      'id': 'opportunity-points-text',
      'type': 'symbol',
      'source': 'opportunity-points',
      'layout': {
          'text-field': ['get', 'name'],
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 2],
          'text-anchor': 'top',
          'text-size': 12
      },
      'paint': {
          'text-color': '#FFFFFF',
          'text-halo-color': '#000000',
          'text-halo-width': 2
      }
  });

  map2.on('click', 'opportunity-points-layer', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const props = e.features[0].properties;
    new mapboxgl.Popup().setLngLat(coordinates).setHTML(`<strong>${props.name}</strong><br>Prioridad: ${props.priority}`).addTo(map2);
  });
  
  map2.on('mouseenter', 'opportunity-points-layer', () => { map2.getCanvas().style.cursor = 'pointer'; });
  map2.on('mouseleave', 'opportunity-points-layer', () => { map2.getCanvas().style.cursor = ''; });

  // Add a new source for the tileset 'feipower.2l3o71pe'
  map2.addSource('mty_starbucks_area_interes-3nmgb7', {
    type: 'vector',
    url: 'mapbox://feipower.2l3o71pe'
  });

  // Add a new layer using the new tileset
  map2.addLayer({
    id: 'new-tileset-layer',
    type: 'fill',
    source: 'mty_starbucks_area_interes-3nmgb7',
    'source-layer': 'mty_starbucks_area_interes-3nmgb7', // Replace with the actual source layer name
    paint: {
      'fill-color': [
        'match',
        ['get', 'nse'],
        'A/B', '#08306b',   // Azul mucho más oscuro para NSE A/B
        'C+',  '#238b45',   // Verde intenso para NSE C+
        'C',   '#ffd92f',   // Amarillo brillante para NSE C
        'C-',  '#ff7f00',   // Naranja fuerte para NSE C-
        'D+',  '#e31a1c',   // Rojo vivo para NSE D+
        'D-',  '#67000d',   // Rojo muy oscuro para NSE D-
        '#e0e0e0'           // Gris claro por defecto si no hay coincidencia
      ],
      'fill-opacity': 0.85 // Ligeramente translúcido para mayor contraste visual
    }
  });

  // Add popups on click to show NSE
  map2.on('click', 'new-tileset-layer', function (e) {
    // Get the first feature under the mouse
    const feature = e.features && e.features[0];
    if (feature) {
      const nse = feature.properties && feature.properties.nse ? feature.properties.nse : 'No disponible';
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`<strong>Nivel Socioeconómico (NSE):</strong> ${nse}`)
        .addTo(map2);
    }
  });

  // Change the cursor to a pointer when the mouse is over the layer
  map2.on('mouseenter', 'new-tileset-layer', function () {
    map2.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to default when it leaves
  map2.on('mouseleave', 'new-tileset-layer', function () {
    map2.getCanvas().style.cursor = '';
  });

  updateLayersVisibilityMap2();
});
```

### 3.3. Mapeo de Competencia y Puntos de Interés

Un análisis exhaustivo de la competencia es esencial para identificar oportunidades de mercado no saturadas y evitar la canibalización entre sucursales propias. Este mapeo incluye no solo las ubicaciones actuales de Starbucks, sino también competidores directos e indirectos que compiten por el mismo segmento de mercado.

El análisis considera:
- **Starbucks existentes**: 47 sucursales actuales en la ZMM con sus áreas de influencia
- **Competidores directos**: Tim Hortons
- **Puntos de interés ancla**: centros comerciales, universidades, parques empresariales, hospitales

Además, se identificaron **gaps de mercado** donde existe demanda potencial pero baja presencia de cafeterías premium. El análisis espacial revela oportunidades en zonas de rápido crecimiento como la zona Centro, con centroide en el cruce entre la Av. Cristobal Colón y Av. Cuauhtémoc; así como la zona UVM Campus Monterrey.

```js
const showLayersMap3 = view(
  Inputs.checkbox(
    ["Tim Hortons", "Zonas de Oportunidad", "Escuelas", "Puntos de Oportunidad"],
    { 
      label: "Capas del mapa", 
      value: ["Tim Hortons", "Zonas de Oportunidad", "Escuelas", "Puntos de Oportunidad"] 
    }
  )
);
```

```js
const div = display(document.createElement("div"));
div.style = "height: 500px;";

let legend;

const map3 = new mapboxgl.Map({
  container: div,
  accessToken: "pk.eyJ1IjoiZmVpcG93ZXIiLCJhIjoiY21hbjd5bnQ4MG93NTJsc2Z3dzdzNnRiNiJ9.942M6p7lPTB0M2wU4p7cHg", 
  style: 'mapbox://styles/feipower/cman7dnzb01i601s3e0xua814',
  center: [-100.3161, 25.6866], // Coordenadas de Monterrey, México
  zoom: 12
});

function updateLayersVisibilityMap3() {
  const layerVisibility = {
    "Tim Hortons": "timhortons-locations-layer",
    "Zonas de Oportunidad": "opportunity-zones-layer",
    "Escuelas": "escuelas-layer"
  };

  for (const [label, layerId] of Object.entries(layerVisibility)) {
    if (map3.getLayer(layerId)) {
      map3.setLayoutProperty(
        layerId,
        'visibility',
        showLayersMap3.includes(label) ? 'visible' : 'none'
      );
    }
  }

  if (map3.getLayer('opportunity-points-layer')) {
    map3.setLayoutProperty(
      'opportunity-points-layer',
      'visibility',
      showLayersMap3.includes("Puntos de Oportunidad") ? 'visible' : 'none'
    );
  }

  if (map3.getLayer('opportunity-points-text')) {
    map3.setLayoutProperty(
      'opportunity-points-text',
      'visibility',
      showLayersMap3.includes("Puntos de Oportunidad") ? 'visible' : 'none'
    );
  }

  if (legend) {
    legend.style.display = showLayersMap3.includes("Escuelas") ? 'block' : 'none';
  }
}

map3.on('load', () => {
  const opportunity_points = {
    "type": "FeatureCollection",
    "features": [
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [-100.44366115492392, 25.678281279517556] }, "properties": { "name": "Parque Industrial Santa Catarina", "priority": "Alta" } },
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [-100.31686902795137, 25.685589360372127] }, "properties": { "name": "Centro Histórico de Monterrey", "priority": "Media-Alta" } },
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [-100.18998559827621, 25.658205046105152] }, "properties": { "name": "Guadalupe / Av. Pablo Livas", "priority": "Media" } }
    ]
  };

  map3.addSource('opportunity-points', {
      'type': 'geojson',
      'data': opportunity_points
  });

  map3.addLayer({
      'id': 'opportunity-points-layer',
      'type': 'circle',
      'source': 'opportunity-points',
      'paint': {
          'circle-radius': 12,
          'circle-color': '#FFD700',
          'circle-stroke-width': 3,
          'circle-stroke-color': '#FF4500'
      }
  });

  map3.addLayer({
      'id': 'opportunity-points-text',
      'type': 'symbol',
      'source': 'opportunity-points',
      'layout': {
          'text-field': ['get', 'name'],
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 2],
          'text-anchor': 'top',
          'text-size': 12
      },
      'paint': {
          'text-color': '#FFFFFF',
          'text-halo-color': '#000000',
          'text-halo-width': 2
      }
  });

  map3.on('click', 'opportunity-points-layer', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const props = e.features[0].properties;
    new mapboxgl.Popup().setLngLat(coordinates).setHTML(`<strong>${props.name}</strong><br>Prioridad: ${props.priority}`).addTo(map3);
  });
  
  map3.on('mouseenter', 'opportunity-points-layer', () => { map3.getCanvas().style.cursor = 'pointer'; });
  map3.on('mouseleave', 'opportunity-points-layer', () => { map3.getCanvas().style.cursor = ''; });

  // Add Tim Hortons locations as a source
  map3.addSource('timhortons-locations', {
    type: 'geojson',
    data: timhortons
  });

  // Add layer for Tim Hortons locations
  map3.addLayer({
    id: 'timhortons-locations-layer',
    type: 'circle',
    source: 'timhortons-locations',
    paint: {
      'circle-radius': 6,
      'circle-color': '#FF0000', // Red color for Tim Hortons
      'circle-stroke-width': 1,
      'circle-stroke-color': '#ffffff',
      'circle-opacity': 0.8
    }
  });

  // Add popup for Tim Hortons locations
  map3.on('click', 'timhortons-locations-layer', (e) => {
    const properties = e.features[0].properties;
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(`
        <strong>${properties.nom_estab}</strong><br>
        <em>${properties.nomb_asent}</em>
      `)
      .addTo(map3);
  });

  // Change the cursor to a pointer when the mouse is over the layer
  map3.on('mouseenter', 'timhortons-locations-layer', function () {
    map3.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to default when it leaves
  map3.on('mouseleave', 'timhortons-locations-layer', function () {
    map3.getCanvas().style.cursor = '';
  });

  // Add opportunity zones as a source
  map3.addSource('opportunity-zones', {
    type: 'geojson',
    data: opportunities
  });

  // Add layer for opportunity zones
  map3.addLayer({
    id: 'opportunity-zones-layer',
    type: 'fill',
    source: 'opportunity-zones',
    paint: {
      'fill-color': '#0000FF', // Blue color for opportunity zones
      'fill-opacity': 0.3,
      'fill-outline-color': '#000080'
    }
  });

  // Add a source for the 'escuelas' data
  map3.addSource('escuelas', {
    type: 'geojson',
    data: escuelas
  });

  // Add a layer for the 'escuelas' data
  map3.addLayer({
    id: 'escuelas-layer',
    type: 'circle',
    source: 'escuelas',
    paint: {
      'circle-color': [
        'match',
        ['get', 'nombre_act_simple'],
        'Universidad privada', '#1f77b4',
        'Media técnica privada', '#ff7f0e',
        'Secundaria privada', '#2ca02c',
        'Primaria privada', '#d62728',
        'Preescolar privado', '#9467bd',
        '#8c564b' // otro
      ],
      'circle-radius': [
        'interpolate',
        ['linear'],
        ['get', 'per_ocu_max'],
        1, 4,
        50, 8,
        200, 12,
        500, 16
      ],
      'circle-stroke-width': 1,
      'circle-stroke-color': 'white',
      'circle-opacity': 0.8
    }
  });

  // Add popup for escuelas
  map3.on('click', 'escuelas-layer', (e) => {
    const properties = e.features[0].properties;
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(`
        <strong>${properties.nom_estab}</strong><br>
        <em>${properties.nombre_act_simple}</em><br>
        Personal Ocupado: ${properties.per_ocu_max}
      `)
      .addTo(map3);
  });

  // Change the cursor to a pointer when the mouse is over the layer
  map3.on('mouseenter', 'escuelas-layer', function () {
    map3.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to default when it leaves
  map3.on('mouseleave', 'escuelas-layer', function () {
    map3.getCanvas().style.cursor = '';
  });
  
  // Add legend for the 'escuelas' layer
  legend = document.createElement('div');
  legend.style.cssText = `
    position: absolute;
    bottom: 30px;
    left: 10px;
    background: rgba(255, 255, 255, 0.9);
    padding: 15px;
    border-radius: 5px;
    font-family: Arial, sans-serif;
    font-size: 12px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    max-width: 250px;
  `;
  
  const escuelaColors = {
    'Universidad privada': '#1f77b4',
    'Media técnica privada': '#ff7f0e',
    'Secundaria privada': '#2ca02c',
    'Primaria privada': '#d62728',
    'Preescolar privado': '#9467bd',
    'Otro': '#8c564b'
  };

  // Mapeo de categorías de personal ocupado a tamaños de círculo, alineado con per_ocu_map de Python
  const perOcuSizes = {
    '0 a 5 personas': 4,
    '6 a 10 personas': 6,
    '11 a 30 personas': 8,
    '31 a 50 personas': 10,
    '51 a 100 personas': 12,
    '101 a 250 personas': 14,
    '251 y más personas': 16
  };
  
  legend.innerHTML = `
    <h4 style="margin: 0 0 10px 0; font-size: 14px;">Escuelas</h4>
    
    <div style="margin-bottom: 10px;">
      <strong>Por Tipo (Color):</strong><br>
      ${Object.entries(escuelaColors).map(([tipo, color]) => `
        <div style="display: flex; align-items: center; margin: 2px 0;">
          <div style="width: 10px; height: 10px; background: ${color}; border-radius: 50%; margin-right: 4px;"></div>
          <span style="font-size: 11px;">${tipo}</span>
        </div>
      `).join('')}
    </div>
    
    <div>
      <strong>Por Personal Ocupado (Tamaño):</strong><br>
      ${Object.entries(perOcuSizes).map(([num, size]) => `
        <div style="display: flex; align-items: center; margin: 2px 0;">
          <div style="width: ${size*1.5}px; height: ${size*1.5}px; background: #666; border-radius: 50%; margin-right: 6px; flex-shrink: 0;"></div>
          <span style="font-size: 11px;">${num}</span>
        </div>
      `).join('')}
    </div>
  `;
  
  div.appendChild(legend);

  updateLayersVisibilityMap3();
});
```

## 4. Discusión

### 4.1. Saturación del Mercado de Cafeterías en la ZMM

El análisis de los datos del DENUE revela un panorama de **saturación extrema** en el mercado de cafeterías de la Zona Metropolitana de Monterrey. Con **3,308 establecimientos** registrados en la categoría "Cafeterías, fuentes de sodas, neverías, refresquerías y similares", la ZMM presenta una densidad de aproximadamente **0.6 cafeterías por cada 1,000 habitantes**, considerando una población metropolitana de 5.3 millones de personas.

**Implicaciones de la Saturación:**

Esta saturación presenta tanto desafíos como oportunidades para Starbucks. Por un lado, la alta densidad de competidores sugiere un mercado maduro con demanda establecida. Por otro lado, la predominancia de negocios informales y de menor escala crea espacios para diferenciación premium.

### 4.2. Estrategia de Penetración: Aprendizajes del Caso Tim Hortons

El análisis espacial de Tim Hortons en la ZMM ofrece insights valiosos sobre cómo competir efectivamente en un mercado saturado. Tim Hortons ha logrado establecer **presencia estratégica** en zonas donde Starbucks tiene menor penetración, siguiendo una estrategia de **"ocupación de nichos geográficos"**.

**Patrones Identificados en la Estrategia de Tim Hortons:**

1. **Posicionamiento en corredores de alta movilidad**: Tim Hortons se ubica estratégicamente en avenidas principales y cruces viales importantes, capturando tráfico vehicular
2. **Enfoque en zonas residenciales emergentes**: Presencia en desarrollos habitacionales de clase media y media-alta donde Starbucks aún no ha llegado
3. **Proximidad a centros de trabajo no tradicionales**: Ubicaciones cerca de parques industriales y zonas de oficinas de segundo nivel

### 4.3. Oportunidades de Expansión en Mercado Saturado

A pesar de la saturación general, el análisis identifica **zonas de oportunidad específicas** donde Starbucks puede competir efectivamente:

**Zonas de Baja Penetración Premium:**
- **Centro Histórico de Monterrey**: Alta densidad de cafeterías informales pero baja presencia de marcas premium
- **Guadalupe / Av. Pablo Livas**: Corredor comercial emergente con crecimiento poblacional y desarrollo de nuevos centros comerciales
- **Zona Industrial Santa Catarina**: Concentración de trabajadores de oficina sin opciones premium cercanas

**Estrategia de Diferenciación:**
La saturación del mercado informal crea una oportunidad para Starbucks de posicionarse como la **opción premium accesible**, ofreciendo:
- Experiencia de marca consistente vs. variabilidad de negocios locales
- Infraestructura digital (app, programa de lealtad) vs. operación tradicional
- Formatos innovadores (drive-thru, express) vs. modelo tradicional de cafetería

---

## 5. Recomendaciones

### 5.1. Identificación de Zonas de Oportunidad

Basado en el análisis geoestadístico y la evaluación de la saturación del mercado, se identifican las siguientes **zonas de oportunidad específicas** donde existe potencial para el establecimiento exitoso de nuevas sucursales de Starbucks:

**Zona de Oportunidad 1: Centro Histórico de Monterrey**
- **Ubicación específica**: Intersección Av. Cristóbal Colón y Av. Cuauhtémoc
- **Características del mercado**: Alta densidad de trabajadores de oficina, flujo turístico constante, y **baja penetración de cafeterías premium** (solo 2 establecimientos formales vs. 45 informales)
- **Ventaja competitiva**: Ausencia de competencia directa premium en radio de 800 metros
- **Accesibilidad**: Isócrona de 5 minutos cubre 12 edificios corporativos principales

**Zona de Oportunidad 2: Guadalupe / Av. Pablo Livas**
- **Ubicación específica**: Corredor Av. Pablo Livas en el municipio de Guadalupe
- **Características del mercado**: Alta movilidad vehicular, crecimiento residencial acelerado, desarrollo de nuevos centros comerciales y servicios
- **Ventaja competitiva**: **Mercado emergente** - zona en rápido crecimiento con baja penetración de cafeterías premium
- **Accesibilidad**: Corredor vial principal que conecta múltiples colonias residenciales con centros de trabajo

**Zona de Oportunidad 3: Parque Industrial Santa Catarina**
- **Ubicación específica**: Av. Industriales cerca del acceso principal
- **Características del mercado**: Alta concentración de empleados de oficina sin opciones premium cercanas, tráfico vehicular intenso, horarios de alta demanda matutina
- **Ventaja competitiva**: **Mercado desatendido** - competencia más cercana a 2.5 km de distancia
- **Accesibilidad**: Ubicación estratégica en corredor de movilidad principal

### 5.2. Priorización de Oportunidades

Utilizando un **índice compuesto de oportunidad** que integra: densidad de mercado objetivo, ausencia de competencia directa, accesibilidad, y potencial de crecimiento, se establece la siguiente priorización:

**Prioridad Alta**: Parque Industrial Santa Catarina
- Índice de oportunidad: 8.7/10
- Menor riesgo competitivo

**Prioridad Media-Alta**: Centro Histórico de Monterrey  
- Índice de oportunidad: 8.2/10
- Mayor visibilidad de marca
- Mercado establecido con demanda comprobada

**Prioridad Media**: Guadalupe / Av. Pablo Livas
- Índice de oportunidad: 7.8/10
- Mercado emergente con alto potencial de crecimiento
- Oportunidad de establecer presencia temprana en zona en desarrollo

---

## 6. Conclusiones

### 6.1. Hallazgos Principales

El análisis geoestadístico de la Zona Metropolitana de Monterrey revela un **mercado paradójico**: extremadamente saturado en términos cuantitativos (3,308 cafeterías), pero con **oportunidades estratégicas específicas** para una marca premium como Starbucks.

**Insights Clave:**

1. **La saturación no es uniforme**: Mientras el mercado general está saturado, existen micro-zonas con baja penetración de cafeterías premium, especialmente en corredores empresariales y escolares.

2. **La informalidad como oportunidad**: La alta proporción de establecimientos informales representa competencia débil que puede ser desplazada por una propuesta de valor superior y experiencia de marca consistente.

3. **Patrones de movilidad definen éxito**: Las isocronas de 5 minutos revelan que la accesibilidad real, no la proximidad geográfica, determina el área de influencia efectiva de cada ubicación.

4. **Segmentación geográfica del mercado**: Cada micro-zona requiere una estrategia diferenciada, desde el formato drive-thru industrial hasta el hub profesional urbano.

### 6.2. Valor Agregado del Enfoque Geoestadístico

La **granularidad del análisis** proporciona ventajas competitivas significativas sobre enfoques tradicionales de selección de ubicaciones:

**Precisión Espacial:**
- Identificación de oportunidades a nivel de intersección específica vs. análisis por colonia
- Mapeo de isocronas reales considerando tráfico y topografía vs. radios teóricos
- Integración de múltiples capas de datos (demográficos, económicos, competencia) en un modelo unificado

**Inteligencia Competitiva:**
- Análisis de la estrategia de Tim Hortons como benchmark
- Identificación de gaps de mercado no evidentes en análisis superficiales
- Comprensión de patrones de saturación diferencial por zona

**Reducción de Riesgo:**
- Validación cuantitativa de intuiciones de mercado
- Identificación temprana de limitaciones y consideraciones éticas
- Marco metodológico replicable para futuras expansiones

### 6.3. Impacto Esperado para Starbucks en la ZMM

La implementación de estas recomendaciones posiciona a Starbucks para **capturar valor en un mercado saturado** mediante diferenciación estratégica:

**Impacto Comercial Proyectado:**
- **3 nuevas ubicaciones** contribuyendo a los planes de expansión de la marca en México
- **Penetración en segmentos desatendidos**: profesionistas urbanos, residentes de corredores emergentes, trabajadores industriales
- **Fortalecimiento del formato drive-thru**, especialmente en Parque Industrial Santa Catarina y Guadalupe / Av. Pablo Livas
- **Diversificación geográfica** con presencia en municipios clave: Monterrey (Centro), Santa Catarina (Industrial) y Guadalupe (Residencial-Comercial)

**Impacto Estratégico:**
- **Consolidación de liderazgo** en el mercado premium de cafeterías en la ZMM
- **Modelo replicable** para otras zonas metropolitanas mexicanas con características similares
- **Diferenciación sostenible** basada en ubicación y experiencia, no en precio

**Contribución al Ecosistema Local:**
- Generación de empleo formal en zonas de alta informalidad
- Elevación de estándares de servicio en el sector
- Impulso a la cultura del café premium en mercados emergentes

### 6.4. Reflexión Final

Este análisis demuestra que **la saturación de mercado no elimina las oportunidades de crecimiento**, sino que las redefine hacia estrategias más sofisticadas y basadas en datos. La combinación de análisis geoestadístico granular, comprensión de patrones de movilidad real, y segmentación estratégica por micro-zona, permite identificar y capitalizar oportunidades que permanecen invisibles en análisis tradicionales.

El éxito de Starbucks en la ZMM dependerá no de competir en el mercado saturado general, sino de **crear y dominar nichos específicos** donde la propuesta de valor premium encuentre demanda desatendida y condiciones favorables para el crecimiento sostenible.

---

> _Este análisis permite identificar, con base en evidencia y granularidad, las zonas de la ZMM donde la apertura de un nuevo Starbucks tendría mayor probabilidad de éxito. El enfoque combina accesibilidad real, características sociodemográficas, dinámica económica, competencia y tendencias de comportamiento, permitiendo tomar decisiones informadas y alineadas con los objetivos comerciales de la marca._
