---
title: Informe de Resultados | Análisis Geoestadístico para Expansión en Tamuín
index: true
toc: false
keywords: expansión, Tamuín, aeropuerto, análisis geoestadístico, desarrollo, mercado potencial, INEGI, SCINCE
---

```js
const tamuin_radios_aeropuerto_m1 = FileAttachment("../../data/gis/aeropuerto_tamuin_isochrone_rings_minutos.geojson").json()
const tamuin_radios_terreno_m1 = FileAttachment("../../data/gis/terreno_tamuin_isochrone_rings_minutos.geojson").json()
const tamuin_radios_terreno2_m1 = FileAttachment("../../data/gis/terreno2_tamuin_isochrone_rings_minutos.geojson").json()
const tamuin_negocios_terrenos_m3 = FileAttachment("../../data/gis/tamuin_businesses.geojson").json()

```

# Informe de Resultados: Análisis Geoestadístico para Expansión en Tamuín

## 1. Resumen Ejecutivo

Este informe analiza el potencial de desarrollo en Tamuín, San Luis Potosí, en el contexto de la modernización de su aeropuerto. Mediante un análisis geoestadístico que integra datos demográficos, económicos y espaciales, se evalúan dos terrenos estratégicos con vocaciones complementarias.

A pesar del decrecimiento poblacional (-2.6%), Tamuín experimenta un crecimiento acelerado de nuevos negocios, lo que subraya el potencial para nuevas inversiones. El análisis identifica un **terreno prioritario de 2 hectáreas**, a 15 minutos del aeropuerto, ideal para un **hub turístico de alto valor**; y un **segundo terreno** a 20 minutos, sobre la carretera Ciudad Valles-Tampico, con vocación para un **centro logístico y de servicios regionales**.

Se recomienda desarrollar en el primer terreno un proyecto de uso mixto con hotel boutique, plaza gastronómica y servicios comunitarios, enfocado en el turismo y el impacto social. Para el segundo, se propone un centro logístico con bodegas, parador comercial y hotel de ruta para diversificar la economía local.

La implementación de esta estrategia dual permitirá no solo capitalizar la nueva infraestructura aeroportuaria, sino también abordar problemáticas sociales clave, revertir tendencias demográficas y posicionar a Tamuín como un modelo de desarrollo regional inclusivo y sostenible.

---

## 2. Introducción

**Contexto del Potencial de Expansión en Tamuín**

Tamuín enfrenta un escenario de crecimiento impulsado por el nuevo aeropuerto y proyecciones de desarrollo regional. El análisis de áreas geográficas, competencia y mercado potencial es clave para identificar oportunidades de expansión.

**Objetivos Específicos del Proyecto**

El presente análisis geoestadístico tiene como objetivos específicos:

- Evaluar el potencial de desarrollo en Tamuín considerando el impacto del nuevo aeropuerto.
- Analizar áreas geográficas alrededor de aeropuertos en México como referencia.
- Identificar competencia y mercado potencial.
- Analizar proyecciones de crecimiento y oportunidades de inversión.
- Generar recomendaciones para la expansión y desarrollo en Tamuín.

---

## 3. Resultados

### 3.1. Mapas de Áreas de Influencia y Crecimiento

Este mapa es una herramienta fundamental para entender la conectividad y el alcance geográfico de los puntos estratégicos en Tamuín. Visualiza las **áreas de influencia (isocronas)**, que muestran el tiempo de viaje en automóvil (de 1 a 60 minutos) desde el **aeropuerto** y los **dos terrenos de interés**. Adicionalmente, se han incorporado los principales **puntos de interés turístico de la Huasteca Potosina**, como cascadas, sitios arqueológicos y pueblos mágicos. Esta combinación permite evaluar la accesibilidad de los terrenos no solo a la infraestructura clave, sino también a los atractivos que definen el potencial turístico de la región.

```js
const showLayers = view(
  Inputs.checkbox([
    "aeropuerto", "terreno", "terreno2", "poi"
  ], { 
    label: "Capas del mapa", 
    value: ["aeropuerto", "terreno", "terreno2", "poi"]
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
  center: [-98.7797, 22.0055], // Coordenadas de Tamuín, San Luis Potosí, México
  zoom: 12
});

map1.on('load', () => {
  // Add tamuin_radios_aeropuerto_m1 as a source
  map1.addSource('tamuin-radios-aeropuerto', {
    type: 'geojson',
    data: tamuin_radios_aeropuerto_m1
  });

  // Add tamuin_radios_terreno_m1 as a source
  map1.addSource('tamuin-radios-terreno', {
    type: 'geojson',
    data: tamuin_radios_terreno_m1
  });

  // Add tamuin_radios_terreno2_m1 as a source
  map1.addSource('tamuin-radios-terreno2', {
    type: 'geojson',
    data: tamuin_radios_terreno2_m1
  });

  // Add layer for the aeropuerto radios
  map1.addLayer({
    id: 'tamuin-radios-aeropuerto-layer',
    type: 'fill',
    source: 'tamuin-radios-aeropuerto',
    paint: {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'rango_minutos'],
        1, '#00ff00',    // Green for smaller values (1 minute)
        15, '#80ff00',   // Yellow-green
        30, '#ffff00',   // Yellow
        45, '#ff8000',   // Orange
        60, '#ff0000'    // Red for bigger values (60 minutes)
      ],
      'fill-opacity': 0.3,
      'fill-outline-color': [
        'interpolate',
        ['linear'],
        ['get', 'rango_minutos'],
        1, '#006600',
        15, '#408000',
        30, '#808000',
        45, '#804000',
        60, '#800000'
      ]
    }
  });

  // Add layer for the terreno radios
  map1.addLayer({
    id: 'tamuin-radios-terreno-layer',
    type: 'fill',
    source: 'tamuin-radios-terreno',
    paint: {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'rango_minutos'],
        1, '#00ff00',    // Green for smaller values (1 minute)
        15, '#80ff00',   // Yellow-green
        30, '#ffff00',   // Yellow
        45, '#ff8000',   // Orange
        60, '#ff0000'    // Red for bigger values (60 minutes)
      ],
      'fill-opacity': 0.3,
      'fill-outline-color': [
        'interpolate',
        ['linear'],
        ['get', 'rango_minutos'],
        1, '#006600',
        15, '#408000',
        30, '#808000',
        45, '#804000',
        60, '#800000'
      ]
    }
  });

  // Add layer for the terreno2 radios (copied styles from terreno-layer)
  map1.addLayer({
    id: 'tamuin-radios-terreno2-layer',
    type: 'fill',
    source: 'tamuin-radios-terreno2',
    paint: {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'rango_minutos'],
        1, '#00ff00',    // Green for smaller values (1 minute)
        15, '#80ff00',   // Yellow-green
        30, '#ffff00',   // Yellow
        45, '#ff8000',   // Orange
        60, '#ff0000'    // Red for bigger values (60 minutes)
      ],
      'fill-opacity': 0.3,
      'fill-outline-color': [
        'interpolate',
        ['linear'],
        ['get', 'rango_minutos'],
        1, '#006600',
        15, '#408000',
        30, '#808000',
        45, '#804000',
        60, '#800000'
      ]
    }
  });

  // Add Points of Interest (POI) source with famous Huasteca Potosina attractions
  map1.addSource('poi-nature', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
      // Local Tamuín POIs
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-98.7797, 22.0055]
        },
        properties: {
          name: 'Parque Central Tamuín',
          category: 'park',
          description: 'Área verde central de la ciudad'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-98.81382515774565, 21.92351052155415]
        },
        properties: {
          name: 'Zona Arqueológica Tamtoc',
          category: 'attraction',
          description: 'Sitio arqueológico huasteco importante'
        }
      },
      // Famous Huasteca Potosina Waterfalls
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-99.17968428843436, 21.801563134287335]
        },
        properties: {
          name: 'Cascada de Tamul',
          category: 'waterfall',
          description: 'La cascada más alta de San Luis Potosí (105m), accesible por lancha desde La Morena'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-99.4159558154175, 21.93170272765371]
        },
        properties: {
          name: 'Puente de Dios (Tamasopo)',
          category: 'waterfall',
          description: 'Formación natural con aguas turquesas y piscinas naturales'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-99.15386727721489, 22.100919026746883]
        },
        properties: {
          name: 'Cascadas de Micos',
          category: 'waterfall',
          description: 'Serie de cascadas con actividades de aventura como tirolesas y salto en bungee'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-99.3180963461012, 22.375541121816745]
        },
        properties: {
          name: 'Cascadas de Minas Viejas',
          category: 'waterfall',
          description: 'Cascada de 55 metros con rappel y piscinas naturales'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-99.39539635959727, 21.939269494919774]
        },
        properties: {
          name: 'Cascadas de Tamasopo',
          category: 'waterfall',
          description: 'Hermosas cascadas en terrazas con aguas cristalinas'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-99.26574699117579, 22.362986930953046]
        },
        properties: {
          name: 'El Salto (El Naranjo)',
          category: 'waterfall',
          description: 'Cascada estacional con piscinas turquesas (flujo depende de época)'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-99.3564599459838, 22.564046342650155]
        },
        properties: {
          name: 'Cascada El Meco',
          category: 'waterfall',
          description: 'Cascada en terrazas con mirador panorámico'
        }
      },
      // World Famous Xilitla and Las Pozas
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-98.99670077947123, 21.396702981649504]
        },
        properties: {
          name: 'Las Pozas (Edward James Garden)',
          category: 'attraction',
          description: 'Jardín surrealista mundialmente famoso de Edward James, candidato a Patrimonio de la Humanidad UNESCO'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-98.99224193569218, 21.384326891591193]
        },
        properties: {
          name: 'Xilitla Pueblo Mágico',
          category: 'town',
          description: 'Pueblo Mágico famoso por su café y arquitectura colonial'
        }
      },
      // Natural Wonders
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-99.09876132230839, 21.599441677275657]
        },
        properties: {
          name: 'Sótano de las Golondrinas',
          category: 'cave',
          description: 'Cueva vertical más profunda del mundo (376m), famosa por el vuelo de vencejos'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-99.03396384425712, 21.530977900163467]
        },
        properties: {
          name: 'Sótano de las Huahuas',
          category: 'cave',
          description: 'Impresionante sima natural con diversa fauna'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-100.02768942970523, 21.861399074996896]
        },
        properties: {
          name: 'Laguna de la Media Luna',
          category: 'water',
          description: 'Manantial natural cristalino ideal para buceo y snorkel'
        }
      }      
    ]
    }
  });

  // Add POI layer for attractions with circle markers
  map1.addLayer({
    id: 'poi-nature-layer',
    type: 'circle',
    source: 'poi-nature',
    paint: {
      'circle-radius': [
        'case',
        ['==', ['get', 'category'], 'waterfall'], 8,
        ['==', ['get', 'category'], 'attraction'], 7,
        ['==', ['get', 'category'], 'cave'], 6,
        ['==', ['get', 'category'], 'town'], 5,
        4
      ],
      'circle-color': [
        'case',
        ['==', ['get', 'category'], 'waterfall'], '#0066cc',
        ['==', ['get', 'category'], 'attraction'], '#cc6600',
        ['==', ['get', 'category'], 'cave'], '#663399',
        ['==', ['get', 'category'], 'town'], '#990000',
        ['==', ['get', 'category'], 'park'], '#2d5016',
        ['==', ['get', 'category'], 'water'], '#00ccff',
        '#ff6600'
      ],
      'circle-stroke-width': 2,
      'circle-stroke-color': '#ffffff',
      'circle-opacity': 0.8
    }
  });

  // Add text labels for POI
  map1.addLayer({
    id: 'poi-labels-layer',
    type: 'symbol',
    source: 'poi-nature',
    layout: {
      'text-field': ['get', 'name'],
      'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
      'text-offset': [0, 2],
      'text-anchor': 'top',
      'text-size': [
        'case',
        ['in', ['get', 'name'], ['literal', ['Las Pozas (Edward James Garden)', 'Cascada de Tamul', 'Sótano de las Golondrinas']]], 14,
        ['==', ['get', 'category'], 'waterfall'], 13,
        ['==', ['get', 'category'], 'attraction'], 13,
        11
      ],
      'text-max-width': 12,
      'text-allow-overlap': false,
      'text-ignore-placement': false
    },
    paint: {
      'text-color': [
        'case',
        ['==', ['get', 'category'], 'waterfall'], '#0066cc',
        ['==', ['get', 'category'], 'attraction'], '#cc6600',
        ['==', ['get', 'category'], 'cave'], '#663399',
        ['==', ['get', 'category'], 'town'], '#990000',
        ['==', ['get', 'category'], 'park'], '#2d5016',
        ['==', ['get', 'category'], 'water'], '#0066cc',
        '#ff6600'
      ],
      'text-halo-color': '#ffffff',
      'text-halo-width': 2
    }
  });

  // Create popup for click interaction
  const popup = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: true
  });

  // Show popup on click for aeropuerto layer
  map1.on('click', 'tamuin-radios-aeropuerto-layer', (e) => {
    const coordinates = e.lngLat;
    const rangoMinutos = e.features[0].properties.rango_minutos;
    
    popup.setLngLat(coordinates)
      .setHTML(`<strong>Rango desde Aeropuerto:</strong> ${rangoMinutos} minutos`)
      .addTo(map1);
  });

  // Show popup on click for terreno layer
  map1.on('click', 'tamuin-radios-terreno-layer', (e) => {
    const coordinates = e.lngLat;
    const rangoMinutos = e.features[0].properties.rango_minutos;
    
    popup.setLngLat(coordinates)
      .setHTML(`<strong>Rango desde Terreno:</strong> ${rangoMinutos} minutos`)
      .addTo(map1);
  });

  // Show popup on click for terreno2 layer
  map1.on('click', 'tamuin-radios-terreno2-layer', (e) => {
    const coordinates = e.lngLat;
    const rangoMinutos = e.features[0].properties.rango_minutos;
    
    popup.setLngLat(coordinates)
      .setHTML(`<strong>Rango desde Terreno 2:</strong> ${rangoMinutos} minutos`)
      .addTo(map1);
  });

  // Show popup on click for POI layer (circles)
  map1.on('click', 'poi-nature-layer', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const properties = e.features[0].properties;
    
    popup.setLngLat(coordinates)
      .setHTML(`
        <div>
          <h3>${properties.name}</h3>
          <p><strong>Categoría:</strong> ${properties.category}</p>
          <p>${properties.description}</p>
        </div>
      `)
      .addTo(map1);
  });

  // Show popup on click for POI labels
  map1.on('click', 'poi-labels-layer', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const properties = e.features[0].properties;
    
    popup.setLngLat(coordinates)
      .setHTML(`
        <div>
          <h3>${properties.name}</h3>
          <p><strong>Categoría:</strong> ${properties.category}</p>
          <p>${properties.description}</p>
        </div>
      `)
      .addTo(map1);
  });

  // Change cursor on hover for aeropuerto layer
  map1.on('mouseenter', 'tamuin-radios-aeropuerto-layer', () => {
    map1.getCanvas().style.cursor = 'pointer';
  });

  // Change cursor on hover for terreno layer
  map1.on('mouseenter', 'tamuin-radios-terreno-layer', () => {
    map1.getCanvas().style.cursor = 'pointer';
  });

  // Change cursor on hover for terreno2 layer
  map1.on('mouseenter', 'tamuin-radios-terreno2-layer', () => {
    map1.getCanvas().style.cursor = 'pointer';
  });

  // Change cursor on hover for POI layer (circles)
  map1.on('mouseenter', 'poi-nature-layer', () => {
    map1.getCanvas().style.cursor = 'pointer';
  });

  // Change cursor on hover for POI labels
  map1.on('mouseenter', 'poi-labels-layer', () => {
    map1.getCanvas().style.cursor = 'pointer';
  });

  // Reset cursor on mouse leave for aeropuerto layer
  map1.on('mouseleave', 'tamuin-radios-aeropuerto-layer', () => {
    map1.getCanvas().style.cursor = '';
  });

  // Reset cursor on mouse leave for terreno layer
  map1.on('mouseleave', 'tamuin-radios-terreno-layer', () => {
    map1.getCanvas().style.cursor = '';
  });

  // Reset cursor on mouse leave for terreno2 layer
  map1.on('mouseleave', 'tamuin-radios-terreno2-layer', () => {
    map1.getCanvas().style.cursor = '';
  });

  // Reset cursor on mouse leave for POI layer (circles)
  map1.on('mouseleave', 'poi-nature-layer', () => {
    map1.getCanvas().style.cursor = '';
  });

  // Reset cursor on mouse leave for POI labels
  map1.on('mouseleave', 'poi-labels-layer', () => {
    map1.getCanvas().style.cursor = '';
  });

  // Add map controls
  const navigationControl = new mapboxgl.NavigationControl();
  map1.addControl(navigationControl, 'bottom-right');

  const scaleControl = new mapboxgl.ScaleControl({
    maxWidth: 300,
    unit: 'metric'
  });
  map1.addControl(scaleControl, 'bottom-left');

  const fullscreenControl = new mapboxgl.FullscreenControl();
  map1.addControl(fullscreenControl, 'bottom-right');

  // Configurar visibilidad inicial de las capas
  updateLayersVisibility();
});

// Función para actualizar la visibilidad de las capas
function updateLayersVisibility() {
  if (map1.getLayer('tamuin-radios-aeropuerto-layer')) {
    map1.setLayoutProperty(
      'tamuin-radios-aeropuerto-layer',
      'visibility',
      showLayers.includes("aeropuerto") ? 'visible' : 'none'
    );
  }
  if (map1.getLayer('tamuin-radios-terreno-layer')) {
    map1.setLayoutProperty(
      'tamuin-radios-terreno-layer',
      'visibility',
      showLayers.includes("terreno") ? 'visible' : 'none'
    );
  }
  if (map1.getLayer('tamuin-radios-terreno2-layer')) {
    map1.setLayoutProperty(
      'tamuin-radios-terreno2-layer',
      'visibility',
      showLayers.includes("terreno2") ? 'visible' : 'none'
    );
  }
  if (map1.getLayer('poi-nature-layer')) {
    map1.setLayoutProperty(
      'poi-nature-layer',
      'visibility',
      showLayers.includes("poi") ? 'visible' : 'none'
    );
  }
  if (map1.getLayer('poi-labels-layer')) {
    map1.setLayoutProperty(
      'poi-labels-layer',
      'visibility',
      showLayers.includes("poi") ? 'visible' : 'none'
    );
  }
}
```

```js
// Reactivamente actualizar la visibilidad de las capas cuando cambien los checkboxes
{
  if (map1 && map1.getLayer && map1.getLayer('tamuin-radios-aeropuerto-layer')) {
    map1.setLayoutProperty(
      'tamuin-radios-aeropuerto-layer',
      'visibility',
      showLayers.includes("aeropuerto") ? 'visible' : 'none'
    );
  }
  if (map1 && map1.getLayer && map1.getLayer('tamuin-radios-terreno-layer')) {
    map1.setLayoutProperty(
      'tamuin-radios-terreno-layer',
      'visibility',
      showLayers.includes("terreno") ? 'visible' : 'none'
    );
  }
  if (map1 && map1.getLayer && map1.getLayer('tamuin-radios-terreno2-layer')) {
    map1.setLayoutProperty(
      'tamuin-radios-terreno2-layer',
      'visibility',
      showLayers.includes("terreno2") ? 'visible' : 'none'
    );
  }
  if (map1 && map1.getLayer && map1.getLayer('poi-nature-layer')) {
    map1.setLayoutProperty(
      'poi-nature-layer',
      'visibility',
      showLayers.includes("poi") ? 'visible' : 'none'
    );
  }
  if (map1 && map1.getLayer && map1.getLayer('poi-labels-layer')) {
    map1.setLayoutProperty(
      'poi-labels-layer',
      'visibility',
      showLayers.includes("poi") ? 'visible' : 'none'
    );
  }
}
```

### 3.2. Análisis de Competencia y Mercado Potencial

Este mapa ofrece una radiografía detallada del tejido comercial de Tamuín, crucial para identificar oportunidades de mercado y analizar la competencia. Basado en datos del DENUE de INEGI, visualiza la ubicación exacta de los negocios existentes, utilizando un **código de colores específico para las 20 principales actividades económicas**. Esta granularidad permite identificar con precisión las zonas de concentración sectorial, los nichos de mercado con menor competencia y las áreas con potencial para nuevos desarrollos. Más que un simple mapa de puntos, es una herramienta estratégica para entender la dinámica económica local y fundamentar decisiones de inversión.

```js
const div = display(document.createElement("div"));
div.style = "height: 500px;";

const map2 = new mapboxgl.Map({
  container: div,
  accessToken: "pk.eyJ1IjoiZmVpcG93ZXIiLCJhIjoiY21hbjd5bnQ4MG93NTJsc2Z3dzdzNnRiNiJ9.942M6p7lPTB0M2wU4p7cHg", 
  style: 'mapbox://styles/feipower/cman7dnzb01i601s3e0xua814',
  center: [-98.7797, 22.0055], // Coordenadas de Tamuín, San Luis Potosí, México
  zoom: 12
});

map2.on('load', () => {
  // Add tamuin_negocios_terrenos_m3 as a source
  map2.addSource('tamuin-negocios', {
    type: 'geojson',
    data: tamuin_negocios_terrenos_m3
  });

  // Add layer for businesses with circle markers
  map2.addLayer({
    id: 'tamuin-negocios-layer',
    type: 'circle',
    source: 'tamuin-negocios',
    paint: {
      'circle-radius': [
        'interpolate',
        ['linear'],
        ['zoom'],
        10, 4,
        15, 8
      ],
      'circle-color': [
        'case',
        ['==', ['get', 'nombre_act'], 'Comercio al por menor en tiendas de abarrotes, ultramarinos y misceláneas'], '#e74c3c',
        ['==', ['get', 'nombre_act'], 'Restaurantes con servicio de preparación de tacos y tortas'], '#f39c12',
        ['==', ['get', 'nombre_act'], 'Servicios de preparación de otros alimentos para consumo inmediato'], '#ff6b35',
        ['==', ['get', 'nombre_act'], 'Salones y clínicas de belleza y peluquerías'], '#e91e63',
        ['==', ['get', 'nombre_act'], 'Comercio al por menor de artículos usados'], '#9c27b0',
        ['==', ['get', 'nombre_act'], 'Restaurantes con servicio de preparación de antojitos'], '#ff9800',
        ['==', ['get', 'nombre_act'], 'Asociaciones y organizaciones religiosas'], '#3f51b5',
        ['==', ['get', 'nombre_act'], 'Comercio al por menor de ropa, excepto de bebé y lencería'], '#673ab7',
        ['==', ['get', 'nombre_act'], 'Restaurantes con servicio de preparación de pizzas, hamburguesas, hot dogs y pollos rostizados para llevar'], '#ff5722',
        ['==', ['get', 'nombre_act'], 'Panificación tradicional'], '#795548',
        ['==', ['get', 'nombre_act'], 'Comercio al por menor de carnes rojas'], '#f44336',
        ['==', ['get', 'nombre_act'], 'Reparación mecánica en general de automóviles y camiones'], '#607d8b',
        ['==', ['get', 'nombre_act'], 'Elaboración de tortillas de maíz y molienda de nixtamal'], '#ffc107',
        ['==', ['get', 'nombre_act'], 'Fabricación de productos de herrería'], '#424242',
        ['==', ['get', 'nombre_act'], 'Comercio al por menor de regalos'], '#e1bee7',
        ['==', ['get', 'nombre_act'], 'Comercio al por menor de artículos de papelería'], '#2196f3',
        ['==', ['get', 'nombre_act'], 'Comercio al por menor de frutas y verduras frescas'], '#4caf50',
        ['==', ['get', 'nombre_act'], 'Comercio al por menor de cerveza'], '#ffeb3b',
        ['==', ['get', 'nombre_act'], 'Comercio al por menor en ferreterías y tlapalerías'], '#ff9e40',
        ['==', ['get', 'nombre_act'], 'Cafeterías, fuentes de sodas, neverías, refresquerías y similares'], '#00bcd4',
        '#2ecc71'
      ],
      'circle-stroke-width': 1,
      'circle-stroke-color': '#ffffff',
      'circle-opacity': 0.8
    }
  });

  // Create popup for business information
  const popup = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: true
  });

  // Show popup on click for businesses
  map2.on('click', 'tamuin-negocios-layer', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const properties = e.features[0].properties;
    
    const popupContent = `
      <div>
        <h3>${properties.nom_estab || 'Negocio'}</h3>
        ${properties.raz_social ? `<p><strong>Razón social:</strong> ${properties.raz_social}</p>` : ''}
        ${properties.nombre_cat ? `<p><strong>Nombre de categoría:</strong> ${properties.nombre_cat}</p>` : ''}
        ${properties.per_ocu ? `<p><strong>Personal ocupado:</strong> ${properties.per_ocu}</p>` : ''}
        ${properties.direccion ? `<p><strong>Dirección:</strong> ${properties.direccion}</p>` : ''}
        ${properties.telefono ? `<p><strong>Teléfono:</strong> ${properties.telefono}</p>` : ''}
      </div>
    `;
    
    popup.setLngLat(coordinates)
      .setHTML(popupContent)
      .addTo(map2);
  });

  // Change cursor on hover
  map2.on('mouseenter', 'tamuin-negocios-layer', () => {
    map2.getCanvas().style.cursor = 'pointer';
  });

  // Reset cursor on mouse leave
  map2.on('mouseleave', 'tamuin-negocios-layer', () => {
    map2.getCanvas().style.cursor = '';
  });

  // Add map controls
  const navigationControl = new mapboxgl.NavigationControl();
  map2.addControl(navigationControl, 'bottom-right');

  const scaleControl = new mapboxgl.ScaleControl({
    maxWidth: 300,
    unit: 'metric'
  });
  map2.addControl(scaleControl, 'bottom-left');

  const fullscreenControl = new mapboxgl.FullscreenControl();
  map2.addControl(fullscreenControl, 'bottom-right');
});
```

## 4. Discusión

### 4.1. Interpretación de Resultados y Estrategia de Expansión

Los resultados del análisis geoestadístico, interpretados en el contexto sociodemográfico y empresarial de Tamuín, revelan una oportunidad de desarrollo única impulsada por la modernización del aeropuerto. A continuación, se detalla el análisis y sus implicaciones directas para la estrategia de expansión.

#### Terrenos Estratégicos: Dos Oportunidades Complementarias

<div class="grid grid-cols-2">
  <div class="card">
    <h2>Terreno 1</h2>
    <p>2 ha, 15 min aeropuerto<br>Hub turístico-social</p>
  </div>
  <div class="card">
    <h2>Terreno 2</h2>
    <p>20 min aeropuerto<br>Centro logístico y de servicios</p>
  </div>
</div>

La proximidad directa al aeropuerto y su ubicación en la principal vía de acceso convierten al Terreno 1 en un **Hub de Servicios al Viajero y Centro de Desarrollo Turístico-Social**. El Terreno 2 es ideal como **Centro Logístico y de Servicios Regionales**.

### 4.2. Limitaciones del Análisis y Consideraciones Éticas

**Limitaciones Técnicas:**
- Los datos empresariales reflejan registros hasta mayo 2025, pero el impacto completo de la modernización aeroportuaria aún no se materializa.

La alta volatilidad en registros empresariales (crecimiento de 7028.57% en 2024) requiere validación adicional. Falta información específica sobre flujos turísticos proyectados y capacidad aeroportuaria post-modernización.

**Consideraciones Éticas y Sociales:** Impacto en comunidades vulnerables: asegurar que el desarrollo mejore condiciones locales sin generar desplazamiento o inflación de servicios básicos. Seguridad comunitaria: considerar la baja percepción de seguridad y problemática de violencia familiar en el diseño de espacios seguros e inclusivos. Reversión migratoria positiva: crear empleos formales que incentiven el retorno de población migrante. Sostenibilidad ambiental: integrar prácticas sostenibles considerando la riqueza natural de la Huasteca. Inclusión económica: Fomentar la integración de los 1,486 negocios existentes en las nuevas cadenas de valor, promoviendo su fortalecimiento y competitividad.

---

## 5. Recomendaciones

### 5.1. Zonas Prioritarias para Expansión y Desarrollo

<div class="grid grid-cols-3">
  <div class="card">
    <h3>Zona de Máxima Prioridad</h3>
    <b>Terreno 1</b><br>2 ha, 15 min aeropuerto<br>Hub turístico-social
  </div>
  <div class="card">
    <h3>Zona de Alta Prioridad</h3>
    <b>Terreno 2</b><br>20 min aeropuerto<br>Centro logístico y de servicios
  </div>
  <div class="card">
    <h3>Zona de Media Prioridad</h3>
    <b>Centro Urbano Consolidado</b><br>Mejoramiento e integración de servicios existentes
  </div>
</div>

### 5.2. Estrategias Diferenciadas por Perfil de Zona y Mercado

#### Para el Terreno 1 (Prioritario, 15 min del aeropuerto):

**Estrategia de Desarrollo Mixto con Impacto Social:**
- Hotel Boutique Temático: 40-60 habitaciones con identidad huasteca, priorizando contratación local (objetivo: 80% personal de Tamuín)
- Plaza Gastronómica Inclusiva: 8-12 restaurantes, espacios para cocineras tradicionales locales
- Centro de Operadores Turísticos: Base para 15-20 operadores certificados, capacitación para guías locales y migrantes retornados
- Servicios Comunitarios Integrados: estacionamiento seguro, coworking, guardería, clínica de salud

*Modelo de Negocio con Enfoque Social:* Tiempo de desarrollo: 18-24 meses para la construcción y 6 meses adicionales para la implementación de programas comunitarios. **Métricas de impacto social:** 150-200 empleos formales, fortalecimiento de 50-100 microempresas locales, reducción de dependencia de remesas.

#### Para el Terreno 2 (Estratégico, 20 min del aeropuerto):

**Estrategia de Hub Logístico y de Servicios Regionales:**
- Centro Logístico y de Almacenamiento: 10,000-15,000 m² de bodegas para agroindustria local
- Parador Turístico y Comercial: estación de servicio, restaurantes, zona comercial
- Hotel de Ruta/Negocios: 50-70 habitaciones
- Área de Servicios para Transporte Pesado: estacionamiento para 50-80 camiones, taller, descanso

*Modelo de Negocio con Enfoque de Diversificación Económica:* Tiempo de desarrollo: 24-30 meses. **Métricas de impacto social:** 100-150 empleos formales, fortalecimiento de cadenas productivas, mejora de infraestructura regional.

#### Para Zonas Urbanas Consolidadas:

**Estrategia de Integración y Mejoramiento Socialmente Responsable:**
- Programas de capacitación contextualizada para negocios de alimentos
- Certificaciones de calidad turística graduales
- Mejoramiento de imagen urbana participativo
- Programa de acceso a servicios básicos
- Red de apoyo para emprendedores retornados

### 5.3. Impacto Socioeconómico Proyectado

<div class="grid grid-cols-2">
  <div class="card">
    <h2>Empleos directos proyectados</h2>
    <p>250-350</p>
  </div>
  <div class="card">
    <h2>Microempresas fortalecidas</h2>
    <p>50-80</p>
  </div>
  <div class="card">
    <h2>Reducción de dependencia de remesas</h2>
    <p>Impacto positivo en economía familiar</p>
  </div>
  <div class="card">
    <h2>Recaudación fiscal</h2>
    <p>Incremento esperado</p>
  </div>
</div>

---

## 6. Conclusiones: Una Oportunidad Estratégica para sus Terrenos

La modernización del aeropuerto de Tamuín es una realidad que redefine el valor y el potencial de sus propiedades. El análisis geoestadístico demuestra que sus terrenos poseen vocaciones estratégicas complementarias que los posicionan como activos clave para capitalizar el crecimiento de la región.

### 6.1. Hallazgos Clave para el Propietario

**Timing de Mercado Inmejorable:** El auge de nuevos negocios y la modernización del aeropuerto crean una ventana de oportunidad única. Sus terrenos pueden satisfacer una demanda de servicios formales y de alta calidad que hoy no existe.

<div class="grid grid-cols-2">
  <div class="card">
    <h3>Terreno 1</h3>
    <b>Corredor Aeropuerto - Valles</b><br>Hub turístico-social
  </div>
  <div class="card">
    <h3>Terreno 2</h3>
    <b>Corredor Valles - Tampico</b><br>Centro logístico y de servicios
  </div>
</div>

**Oportunidad de Mercado y Diferenciación por Calidad:** La estructura comercial actual representa una oportunidad para que sus proyectos establezcan un nuevo estándar de calidad, capturando una demanda insatisfecha.

### 6.2. Estrategia de Valor y Próximos Pasos

**Estrategia de desarrollo dual:** Se recomienda para maximizar el potencial de ambos terrenos y mitigar riesgos.

#### Para el Terreno 1: El Hub Turístico-Social

El objetivo es crear un destino. Un **hotel boutique**, una **plaza gastronómica** y un **centro de operadores turísticos** se convertirán en la puerta de entrada a la Huasteca Potosina. El componente de impacto social es un diferenciador clave que atraerá a un mercado premium y facilitará el apoyo institucional.

**Acción recomendada:** Iniciar de inmediato el plan maestro y los estudios de viabilidad.

#### Para el Terreno 2: El Centro Logístico y de Servicios

Este terreno diversifica la inversión. Un **centro de almacenamiento y logística** (especialmente refrigerado) junto a un **parador comercial y hotel de ruta** generará flujos de ingreso estables y anticíclicos al turismo.

**Acción recomendada:** Iniciar contactos comerciales para pre-arrendamiento de bodegas y espacios mientras se avanza en la permisología.

### 6.3. El Legado de su Inversión

Su decisión de desarrollar estos terrenos no solo generará un retorno económico significativo, sino que lo posicionará como el catalizador de la transformación de Tamuín.

- **Impacto Económico y Social:** Creación de 250 a 350 empleos formales, revirtiendo la tendencia de decrecimiento poblacional y fortaleciendo la economía local.
- **Impacto Territorial:** Mejora de conectividad, seguridad y oferta de servicios para toda la región.
- **Visión a Largo Plazo:** Al desarrollar ambos proyectos, usted crea un ecosistema económico: un círculo virtuoso de crecimiento donde el turismo y la logística se retroalimentan.

> _Este análisis permite identificar, con base en evidencia y granularidad, las zonas de Tamuín con mayor potencial de expansión y desarrollo, considerando el impacto del nuevo aeropuerto y las proyecciones de crecimiento regional. El enfoque combina análisis de competencia, mercado potencial y tendencias de desarrollo, permitiendo tomar decisiones informadas y alineadas con los objetivos del proyecto._
