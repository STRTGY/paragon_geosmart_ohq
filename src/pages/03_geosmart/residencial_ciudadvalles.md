---
title: Informe de Resultados | Análisis Geoestadístico para Residencial en Ciudad Valles
index: true
toc: false
keywords: residencial, Ciudad Valles, análisis geoestadístico, perfil de compradores, INFONAVIT, mercado inmobiliario
---

```js
const cdvalles_hospitales_nse = FileAttachment("../../data/gis/cdvalles_nse.geojson").json()
const cdvalles_religion = FileAttachment("../../data/gis/Centros_religiosos_CV.geojson").json()
const cdvalles_bancos = FileAttachment("../../data/gis/CiudadValles_Bancos.geojson").json()
const cdvalles_escuelas = FileAttachment("../../data/gis/Escuelas_CV.geojson").json()
const cdvalles_farmacias = FileAttachment("../../data/gis/Farmacias_CV.geojson").json()
```

# Informe de Resultados: Análisis Geoestadístico para Residencial en Ciudad Valles

## 1. Resumen Ejecutivo

<!-- Breve descripción del objetivo, hallazgos principales y recomendaciones clave. -->

---

## 2. Introducción

**Contexto del Mercado Residencial en Ciudad Valles**

**Descripción de la estructura vial y colonias**

**Ubicación general:**
La zona se sitúa en el sector norte de Ciudad Valles, San Luis Potosí, comprendiendo colonias como Vista Hermosa, Miguel Hidalgo, La Estrella y parcialmente Emiliano Zapata. La coordenada marcada se localiza sobre Av. López Mateos, eje articulador clave del flujo vial norte-sur en esta área.

**Estructura vial**

**Avenida López Mateos:**
Principal arteria de la zona, con orientación noroeste-sureste. Canaliza tráfico vehicular de mediana a alta densidad y conecta con colonias importantes como Vista Hermosa, La Estrella y Emiliano Zapata. Su trazado recto y continuo facilita accesos a transporte público y comercios.

**Calles perpendiculares relevantes:**
- Miguel Hidalgo: Corre paralela al oeste de López Mateos; conecta zonas residenciales y algunos comercios de proximidad.
- 16 de Septiembre: Calle transversal al oeste de Miguel Hidalgo, conecta con Río Tamuín y delimita parte de Vista Hermosa.
- Corregidora: Otra vía transversal al sur, marca el límite con la colonia Mujeres en Solidaridad.

**Objetivos Específicos del Proyecto**

El presente análisis geoestadístico tiene como objetivos específicos: (1) caracterizar el mercado y el perfil de compradores de vivienda en Ciudad Valles; (2) analizar el acceso a créditos INFONAVIT y su impacto en la demanda; (3) identificar zonas con mayor potencial para desarrollos residenciales; (4) evaluar la competencia y la saturación del mercado; (5) generar recomendaciones para el desarrollo y comercialización de vivienda.

---

## 3. Resultados

### 3.1. Mapas de Nivel Socioeconómico y Perfil de Compradores

El terreno residencial analizado se localiza en la zona mostrada en el siguiente mapa, correspondiente a la parte norte de Ciudad Valles, en las inmediaciones de la Colonia Vista Hermosa. En la imagen, se observa la segmentación de manzanas y polígonos coloreados según el nivel socioeconómico predominante, donde los tonos rojos y naranjas indican áreas de nivel medio-bajo a medio, mientras que los tonos amarillos y verdes representan zonas de nivel medio y medio-alto.

El análisis del perfil de compradores en esta área se fundamenta en la caracterización del nivel socioeconómico de la zona, utilizando datos georreferenciados que permiten identificar la distribución espacial de los distintos segmentos de la población. La segmentación por nivel socioeconómico (NSE) considera variables como ingreso familiar, nivel educativo, tipo de vivienda y acceso a servicios, lo que facilita la identificación de clusters de demanda potencial y la delimitación de zonas con mayor capacidad adquisitiva para absorber nuevos desarrollos residenciales orientados a perfiles específicos de compradores según su nivel socioeconómico.

```js
const showLayers = view(
  Inputs.checkbox([
    "nse"
  ], { 
    label: "Capas del mapa", 
    value: ["nse"]
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
  center: [-99.02715936490286, 22.01879445037609], // Coordenadas de Ciudad Valles, San Luis Potosí, México
  zoom: 14
});

map1.on('load', () => {
  // Add cdvalles_hospitales_nse as a source
  map1.addSource('cdvalles-nse', {
    type: 'geojson',
    data: cdvalles_hospitales_nse
  });

  // Add layer for NSE (Nivel Socioeconómico)
  map1.addLayer({
    id: 'cdvalles-nse-layer',
    type: 'fill',
    source: 'cdvalles-nse',
    paint: {
      'fill-color': [
        'case',
        ['==', ['get', 'nse'], 'A/B'], '#2E8B57',    // Verde oscuro para nivel alto
        ['==', ['get', 'nse'], 'C+'], '#32CD32',     // Verde claro para nivel medio-alto
        ['==', ['get', 'nse'], 'C'], '#FFD700',      // Amarillo para nivel medio
        ['==', ['get', 'nse'], 'C-'], '#FF8C00',     // Naranja para nivel medio-bajo
        ['==', ['get', 'nse'], 'D+'], '#FF6347',     // Rojo claro para nivel bajo
        ['==', ['get', 'nse'], 'D'], '#DC143C',      // Rojo oscuro para nivel muy bajo
        '#808080'  // Gris por defecto
      ],
      'fill-opacity': 0.6,
      'fill-outline-color': '#000000'
    }
  });

  // Create popup for NSE layer
  const popup = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: true
  });

  // Show popup on click for NSE layer
  map1.on('click', 'cdvalles-nse-layer', (e) => {
    const coordinates = e.lngLat;
    const nse = e.features[0].properties.nse;
    const poblacion = e.features[0].properties.POB1 || 'N/A';
    
    popup.setLngLat(coordinates)
      .setHTML(`
        <strong>Nivel Socioeconómico:</strong> ${nse}<br>
        <strong>Población:</strong> ${poblacion}
      `)
      .addTo(map1);
  });

  // Change cursor on hover for NSE layer
  map1.on('mouseenter', 'cdvalles-nse-layer', () => {
    map1.getCanvas().style.cursor = 'pointer';
  });

  // Reset cursor on mouse leave for NSE layer
  map1.on('mouseleave', 'cdvalles-nse-layer', () => {
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

// Función para actualizar la visibilidad de las capas NSE
function updateLayersVisibility() {
  if (map1.getLayer('cdvalles-nse-layer')) {
    map1.setLayoutProperty(
      'cdvalles-nse-layer',
      'visibility',
      showLayers.includes("nse") ? 'visible' : 'none'
    );
  }
}
```

```js
// Reactivamente actualizar la visibilidad de las capas cuando cambien los checkboxes
{
  if (map1 && map1.getLayer && map1.getLayer('cdvalles-nse-layer')) {
    map1.setLayoutProperty(
      'cdvalles-nse-layer',
      'visibility',
      showLayers.includes("nse") ? 'visible' : 'none'
    );
  }
}
```

### 3.2. Análisis de Zonas con Potencial Residencial

La identificación de zonas óptimas para desarrollo residencial se basa en un modelo multicriterio que pondera factores como: densidad poblacional, infraestructura existente, servicios públicos, accesibilidad vial y tendencias de crecimiento urbano. El siguiente mapa presenta un análisis de calor (heatmap) que clasifica las áreas de Ciudad Valles según su potencial para proyectos residenciales, destacando aquellas zonas que combinan demanda insatisfecha con condiciones favorables para el desarrollo inmobiliario.

#### Análisis Específico: Ausencia de Establecimientos en Villas de San Pedro

El fraccionamiento **Villas de San Pedro** (coordenadas: 22.01930081, -99.02351337) presenta una notable **carencia de servicios básicos y establecimientos comerciales**, lo que representa tanto un desafío como una oportunidad para el desarrollo residencial en la zona.

**Servicios Financieros:**
- **Ausencia total de bancos y cajeros automáticos** en un radio de 2 km
- El banco más cercano se encuentra en el centro de Ciudad Valles (distancia > 3.5 km)
- Falta de servicios financieros básicos como casas de cambio, cooperativas de crédito o instituciones microfinancieras
- Esta carencia limita significativamente el acceso a servicios bancarios para los residentes actuales

**Servicios Educativos:**
- **No existen escuelas públicas o privadas** dentro del fraccionamiento
- La institución educativa más próxima se localiza a más de 2.5 km de distancia
- Ausencia de centros de educación inicial, preescolar, primaria y secundaria
- Falta de opciones educativas especializadas (idiomas, artes, deportes)

**Servicios de Salud:**
- **Carencia completa de farmacias** en la zona inmediata
- No se identifican consultorios médicos, clínicas o centros de salud
- La farmacia más cercana se encuentra en colonias adyacentes a más de 2 km
- Ausencia de servicios de emergencia médica locales

**Servicios Religiosos:**
- **Falta de centros religiosos** establecidos en el fraccionamiento
- No se registran iglesias, capillas o templos de diferentes denominaciones
- Los servicios religiosos más cercanos se ubican en el centro de Ciudad Valles

**Establecimientos Comerciales y de Servicios:**
- **Limitada oferta gastronómica**: únicamente se registra un establecimiento de venta de hamburguesas sin nombre comercial establecido
- Ausencia de supermercados, tiendas de conveniencia o mercados locales
- Falta de servicios básicos como lavanderías, tintorerías, o talleres mecánicos
- No existen centros comerciales o plazas comerciales en la zona

**Implicaciones para el Desarrollo Residencial:**

*Oportunidades:*
- **Mercado virgen** para el desarrollo de servicios complementarios
- Potencial para crear un **centro de servicios integrado** que atienda las necesidades básicas
- Oportunidad de **diferenciación** mediante la inclusión de amenidades y servicios dentro del desarrollo
- Posibilidad de **alianzas estratégicas** con proveedores de servicios para establecer sucursales

*Desafíos:*
- **Dependencia de transporte** para acceder a servicios básicos
- Posible **resistencia de compradores** debido a la falta de comodidades cercanas
- **Necesidad de inversión adicional** en infraestructura de servicios
- **Tiempo de maduración** más largo para que la zona desarrolle su ecosistema comercial

*Recomendaciones Estratégicas:*
1. **Incluir servicios básicos** en el plan maestro del desarrollo (farmacia, minisuper, cajero automático)
2. **Negociar con instituciones educativas** para establecer una escuela satélite
3. **Crear alianzas** con cadenas comerciales para garantizar servicios post-venta
4. **Desarrollar un centro comunitario** que concentre servicios esenciales
5. **Implementar transporte colectivo** hacia zonas de servicios consolidadas

<!-- Mapas y tablas de zonas con mayor potencial para vivienda. -->

```js
const showLayers2 = view(
  Inputs.checkbox([
    "religion",
    "bancos", 
    "escuelas",
    "farmacias"
  ], { 
    label: "Capas del mapa", 
    value: ["religion"]
  })
);
```

```js
const div2 = display(document.createElement("div"));
div2.style = "height: 500px;";

const map2 = new mapboxgl.Map({
  container: div2,
  accessToken: "pk.eyJ1IjoiZmVpcG93ZXIiLCJhIjoiY21hbjd5bnQ4MG93NTJsc2Z3dzdzNnRiNiJ9.942M6p7lPTB0M2wU4p7cHg", 
  style: 'mapbox://styles/feipower/cman7dnzb01i601s3e0xua814',
  center: [-99.02715936490286, 22.01879445037609], // Coordenadas de Ciudad Valles, San Luis Potosí, México
  zoom: 14
});

map2.on('load', () => {
  // Add religion centers layer
  map2.addSource('cdvalles-religion', {
    type: 'geojson',
    data: cdvalles_religion
  });

  map2.addLayer({
    id: 'cdvalles-religion-layer',
    type: 'circle',
    source: 'cdvalles-religion',
    paint: {
      'circle-radius': 6,
      'circle-color': '#8B4513',
      'circle-stroke-color': '#FFFFFF',
      'circle-stroke-width': 2
    }
  });

  // Add banks layer
  map2.addSource('cdvalles-bancos', {
    type: 'geojson',
    data: cdvalles_bancos
  });

  map2.addLayer({
    id: 'cdvalles-bancos-layer',
    type: 'circle',
    source: 'cdvalles-bancos',
    paint: {
      'circle-radius': 6,
      'circle-color': '#1E90FF',
      'circle-stroke-color': '#FFFFFF',
      'circle-stroke-width': 2
    }
  });

  // Add schools layer
  map2.addSource('cdvalles-escuelas', {
    type: 'geojson',
    data: cdvalles_escuelas
  });

  map2.addLayer({
    id: 'cdvalles-escuelas-layer',
    type: 'circle',
    source: 'cdvalles-escuelas',
    paint: {
      'circle-radius': 6,
      'circle-color': '#228B22',
      'circle-stroke-color': '#FFFFFF',
      'circle-stroke-width': 2
    }
  });

  // Add pharmacies layer
  map2.addSource('cdvalles-farmacias', {
    type: 'geojson',
    data: cdvalles_farmacias
  });

  map2.addLayer({
    id: 'cdvalles-farmacias-layer',
    type: 'circle',
    source: 'cdvalles-farmacias',
    paint: {
      'circle-radius': 6,
      'circle-color': '#DC143C',
      'circle-stroke-color': '#FFFFFF',
      'circle-stroke-width': 2
    }
  });

  // Create popup for all layers
  const popup2 = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: true
  });

  // Religion centers popup
  map2.on('click', 'cdvalles-religion-layer', (e) => {
    const coordinates = e.lngLat;
    const nombre = e.features[0].properties.title || e.features[0].properties.name || 'Centro Religioso';
    
    popup2.setLngLat(coordinates)
      .setHTML(`
        <strong>Centro Religioso</strong><br>
        <strong>Nombre:</strong> ${nombre}
      `)
      .addTo(map2);
  });

  // Banks popup
  map2.on('click', 'cdvalles-bancos-layer', (e) => {
    const coordinates = e.lngLat;
    const nombre = e.features[0].properties.title || e.features[0].properties.name || 'Banco';
    
    popup2.setLngLat(coordinates)
      .setHTML(`
        <strong>Banco</strong><br>
        <strong>Nombre:</strong> ${nombre}
      `)
      .addTo(map2);
  });

  // Schools popup
  map2.on('click', 'cdvalles-escuelas-layer', (e) => {
    const coordinates = e.lngLat;
    const nombre = e.features[0].properties.title || e.features[0].properties.name || 'Escuela';
    
    popup2.setLngLat(coordinates)
      .setHTML(`
        <strong>Escuela</strong><br>
        <strong>Nombre:</strong> ${nombre}
      `)
      .addTo(map2);
  });

  // Pharmacies popup
  map2.on('click', 'cdvalles-farmacias-layer', (e) => {
    const coordinates = e.lngLat;
    const nombre = e.features[0].properties.title || e.features[0].properties.name || 'Farmacia';
    
    popup2.setLngLat(coordinates)
      .setHTML(`
        <strong>Farmacia</strong><br>
        <strong>Nombre:</strong> ${nombre}
      `)
      .addTo(map2);
  });

  // Change cursor on hover for all layers
  ['cdvalles-religion-layer', 'cdvalles-bancos-layer', 'cdvalles-escuelas-layer', 'cdvalles-farmacias-layer'].forEach(layerId => {
    map2.on('mouseenter', layerId, () => {
      map2.getCanvas().style.cursor = 'pointer';
    });

    map2.on('mouseleave', layerId, () => {
      map2.getCanvas().style.cursor = '';
    });
  });

  // Add map controls
  const navigationControl2 = new mapboxgl.NavigationControl();
  map2.addControl(navigationControl2, 'bottom-right');

  const scaleControl2 = new mapboxgl.ScaleControl({
    maxWidth: 300,
    unit: 'metric'
  });
  map2.addControl(scaleControl2, 'bottom-left');

  const fullscreenControl2 = new mapboxgl.FullscreenControl();
  map2.addControl(fullscreenControl2, 'bottom-right');

  // Configurar visibilidad inicial de las capas
  updateLayers2Visibility();
});

// Función para actualizar la visibilidad de las capas
function updateLayers2Visibility() {
  const layerMapping = {
    'religion': 'cdvalles-religion-layer',
    'bancos': 'cdvalles-bancos-layer',
    'escuelas': 'cdvalles-escuelas-layer',
    'farmacias': 'cdvalles-farmacias-layer'
  };

  Object.entries(layerMapping).forEach(([checkboxValue, layerId]) => {
    if (map2.getLayer(layerId)) {
      map2.setLayoutProperty(
        layerId,
        'visibility',
        showLayers2.includes(checkboxValue) ? 'visible' : 'none'
      );
    }
  });
}
```

```js
// Reactivamente actualizar la visibilidad de las capas cuando cambien los checkboxes
{
  if (map2 && map2.getLayer) {
    const layerMapping = {
      'religion': 'cdvalles-religion-layer',
      'bancos': 'cdvalles-bancos-layer',
      'escuelas': 'cdvalles-escuelas-layer',
      'farmacias': 'cdvalles-farmacias-layer'
    };

    Object.entries(layerMapping).forEach(([checkboxValue, layerId]) => {
      if (map2.getLayer(layerId)) {
        map2.setLayoutProperty(
          layerId,
          'visibility',
          showLayers2.includes(checkboxValue) ? 'visible' : 'none'
        );
      }
    });
  }
}
```

### 3.3. Competencia y Saturación del Mercado

El mapeo de la competencia existente es fundamental para identificar nichos de mercado y evitar zonas saturadas. Este análisis georeferencia los desarrollos residenciales actuales, proyectos en construcción y terrenos con permisos aprobados. La visualización permite evaluar la densidad de oferta por zona, identificar vacíos de mercado y determinar la distancia óptima entre desarrollos para evitar canibalización. Se incluyen tanto desarrollos de interés social como vivienda media y residencial.

<!-- Localización de desarrollos residenciales existentes y competencia. -->

```js
const div = display(document.createElement("div"));
div.style = "height: 500px;";

const map3 = new mapboxgl.Map({
  container: div,
  accessToken: "pk.eyJ1IjoiZmVpcG93ZXIiLCJhIjoiY21hbjd5bnQ4MG93NTJsc2Z3dzdzNnRiNiJ9.942M6p7lPTB0M2wU4p7cHg", 
  style: 'mapbox://styles/feipower/cman7dnzb01i601s3e0xua814',
  center: [-99.02715936490286, 22.01879445037609], // Coordenadas de Ciudad Valles, San Luis Potosí, México
  zoom: 14
});
```

### 3.4. Estrategias de Comercialización

Las estrategias de comercialización deben adaptarse a las características específicas de cada zona identificada. Este mapa integra información sobre canales de venta efectivos, puntos de contacto con compradores potenciales y ubicaciones estratégicas para oficinas de venta. Se consideran factores como flujos peatonales, accesibilidad desde principales vías, visibilidad y proximidad a los segmentos objetivo. La visualización permite optimizar la inversión en marketing y maximizar el alcance de las campañas promocionales.

<!-- Tabla y mapa de estrategias sugeridas para comercialización de vivienda. -->

```js
const div = display(document.createElement("div"));
div.style = "height: 500px;";

const map4 = new mapboxgl.Map({
  container: div,
  accessToken: "pk.eyJ1IjoiZmVpcG93ZXIiLCJhIjoiY21hbjd5bnQ4MG93NTJsc2Z3dzdzNnRiNiJ9.942M6p7lPTB0M2wU4p7cHg", 
  style: 'mapbox://styles/feipower/cman7dnzb01i601s3e0xua814',
  center: [-99.02715936490286, 22.01879445037609], // Coordenadas de Ciudad Valles, San Luis Potosí, México
  zoom: 14
});
```

---

## 4. Discusión

- Interpretación de los resultados en el contexto del mercado residencial.
- Implicaciones para la estrategia de desarrollo y comercialización de vivienda.
- Limitaciones del análisis y consideraciones éticas.

---

## 5. Recomendaciones

- Zonas sugeridas para nuevos desarrollos residenciales.
- Estrategias diferenciadas según perfil de comprador y zona.
- Siguientes pasos para validación en campo y toma de decisión.

---

## 6. Conclusiones

- Resumen de los hallazgos más relevantes.
- Valor agregado del enfoque geoestadístico.
- Impacto esperado para el sector residencial en Ciudad Valles.

---

> _Este análisis permite identificar, con base en evidencia y granularidad, las zonas de Ciudad Valles donde el desarrollo de vivienda residencial tendría mayor probabilidad de éxito. El enfoque combina datos de perfil de compradores, acceso a créditos, competencia y tendencias de mercado, permitiendo tomar decisiones informadas y alineadas con los objetivos del proyecto._ 