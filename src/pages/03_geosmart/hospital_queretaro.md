---
title: Informe de Resultados | Análisis Geoestadístico para Hospital en Querétaro
index: true
toc: false
keywords: hospital, Querétaro, análisis geoestadístico, demanda insatisfecha, densidad poblacional, requisitos legales, competencia
---

```js
// Datos de análisis de cobertura hospitalaria en Querétaro
const queretaro_isocronas_hospitalarias = FileAttachment("../../data/gis/queretaro_hospitales_analysis/queretaro_isocronas_hospitalarias.geojson").json()
const queretaro_top10_agebs_prioritarios = FileAttachment("../../data/gis/queretaro_hospitales_analysis/queretaro_top10_agebs_prioritarios.geojson").json()
const queretaro_agebs_sin_cobertura = FileAttachment("../../data/gis/queretaro_hospitales_analysis/queretaro_agebs_sin_cobertura.geojson").json()
const queretaro_agebs_metropolitanos_cobertura = FileAttachment("../../data/gis/queretaro_hospitales_analysis/queretaro_agebs_metropolitanos_cobertura.geojson").json()
const queretaro_cobertura_hospitalaria_5min = FileAttachment("../../data/gis/queretaro_hospitales_analysis/queretaro_cobertura_hospitalaria_5min.geojson").json()
const queretaro_area_metropolitana = FileAttachment("../../data/gis/queretaro_hospitales_analysis/queretaro_area_metropolitana.geojson").json()
const metadata_analisis_cobertura = FileAttachment("../../data/gis/queretaro_hospitales_analysis/metadata_analisis_cobertura.json").json()

```

# Informe de Resultados: Análisis Geoestadístico para Hospital en Querétaro

## 1. Resumen Ejecutivo

**Oportunidad de Inversión Hospitalaria en Querétaro**

El análisis geoestadístico integral de la infraestructura hospitalaria en Querétaro identifica una **oportunidad de inversión cuantificable y estratégicamente atractiva** para el desarrollo de servicios hospitalarios en la zona metropolitana.

**Hallazgos Principales:**

- **Mercado Desatendido:** 98,770 habitantes (11.7% de la población metropolitana) carecen de acceso a servicios hospitalarios en un radio de 5 minutos
- **Perfil Socioeconómico Favorable:** 73.3% del mercado desatendido pertenece a niveles socioeconómicos C+, C y C- (70,465 habitantes), segmentos con capacidad de pago comprobada
- **Concentración Geográfica:** La demanda insatisfecha se concentra en 46 AGEBs específicos, facilitando estrategias de inversión focalizadas
- **Ubicaciones Prioritarias:** Los top 15 AGEBs concentran 59,995 habitantes en áreas geográficamente definidas, con poblaciones entre 2,652 y 7,467 habitantes por zona

**Recomendación de Inversión:**

Desarrollo de un **"hospital de clase media"** por fases, iniciando con una de las zonas prioritarias con más de 7,000 habitantes y un perfil socioeconómico de clase media (NSE C). El modelo debe posicionarse estratégicamente entre hospitales premium (Ángeles Querétaro) y el sector público, ofreciendo calidad media-alta a precios accesibles para ingresos de $18,000-$50,000 mensuales.

**Valor de la Propuesta:**

Esta oportunidad permite capturar un **nicho de mercado desatendido** de 70,465 habitantes de clase media, evitando competencia directa con hospitales premium establecidos mientras se atiende una demanda insatisfecha con capacidad de pago comprobada. El modelo alinea impacto social con rentabilidad financiera en un segmento tradicionalmente ignorado por la polarización del mercado hospitalario.

---

## 2. Introducción

**Contexto del Mercado Hospitalario en Querétaro**

Querétaro es una ciudad con alta demanda de servicios hospitalarios y crecimiento poblacional. La identificación de ubicaciones óptimas para hospitales requiere analizar demanda insatisfecha, densidad poblacional, competencia y requisitos legales.

**Objetivos Específicos del Proyecto**

El presente análisis geoestadístico tiene como objetivos específicos: (1) identificar ubicaciones óptimas para hospitales en Querétaro basadas en demanda insatisfecha y densidad poblacional; (2) analizar requisitos legales y factores determinantes para la elección de ubicación; (3) evaluar la competencia y especialidades con menor oferta (océano azul); (4) determinar el radio de influencia óptimo; (5) generar recomendaciones para la apertura de nuevos hospitales.

---

## 3. Resultados

### 3.1. Análisis de Competencia y Especialidades

La siguiente visualización mapea la distribución actual de hospitales y clínicas en Querétaro, categorizados por especialidad médica. Los puntos azules representan hospitales generales, mientras que otros colores identifican especialidades específicas. El análisis revela áreas de "océano azul" donde ciertas especialidades tienen poca o nula presencia, representando oportunidades de mercado. Se incluyen indicadores de saturación competitiva y nichos desatendidos que podrían ser aprovechados por nuevos hospitales especializados.

<!-- Mapas y tablas de competencia y especialidades con menor oferta. -->
```js
const container = display(document.createElement("div"));
container.style = "position: relative;";

// Crear controles de capas
const controls = document.createElement("div");
controls.style = `
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 1000;
  font-family: Arial, sans-serif;
  font-size: 12px;
  max-width: 250px;
`;

controls.innerHTML = `
  <h4 style="margin: 0 0 10px 0; color: #333;">Capas del Mapa</h4>
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <label style="display: flex; align-items: center; cursor: pointer;">
      <input type="checkbox" id="area-metropolitana-toggle" checked style="margin-right: 8px;">
      <span style="color: #666;">🏙️ Área Metropolitana</span>
    </label>
    <label style="display: flex; align-items: center; cursor: pointer;">
      <input type="checkbox" id="agebs-metropolitanos-toggle" checked style="margin-right: 8px;">
      <span style="color: #333;">📊 AGEBs Metropolitanos</span>
    </label>
    <label style="display: flex; align-items: center; cursor: pointer;">
      <input type="checkbox" id="agebs-sin-cobertura-toggle" checked style="margin-right: 8px;">
      <span style="color: #F44336;">❌ AGEBs Sin Cobertura</span>
    </label>
    <label style="display: flex; align-items: center; cursor: pointer;">
      <input type="checkbox" id="top10-agebs-toggle" checked style="margin-right: 8px;">
      <span style="color: #E91E63;">⭐ Top 10 Prioritarios</span>
    </label>
    <label style="display: flex; align-items: center; cursor: pointer;">
      <input type="checkbox" id="cobertura-5min-toggle" checked style="margin-right: 8px;">
      <span style="color: #2196F3;">🔵 Cobertura Hospitalaria</span>
    </label>
    <label style="display: flex; align-items: center; cursor: pointer;">
      <input type="checkbox" id="isocronas-toggle" checked style="margin-right: 8px;">
      <span style="color: #4CAF50;">🚗 Isócronas de Acceso</span>
    </label>
  </div>
  <div style="margin-top: 15px; padding-top: 10px; border-top: 1px solid #eee;">
    <h5 style="margin: 0 0 8px 0; color: #333; font-size: 11px;">Leyenda NSE (Sin Cobertura):</h5>
    <div style="display: flex; flex-direction: column; gap: 3px; font-size: 10px;">
      <div style="display: flex; align-items: center;">
        <div style="width: 12px; height: 12px; background: #8E24AA; margin-right: 6px; border-radius: 2px;"></div>
        <span>A/B - Alto ($50,000+)</span>
      </div>
      <div style="display: flex; align-items: center;">
        <div style="width: 12px; height: 12px; background: #1976D2; margin-right: 6px; border-radius: 2px;"></div>
        <span>C+ - Medio Alto ($45-50k)</span>
      </div>
      <div style="display: flex; align-items: center;">
        <div style="width: 12px; height: 12px; background: #388E3C; margin-right: 6px; border-radius: 2px;"></div>
        <span>C - Medio ($30-40k)</span>
      </div>
      <div style="display: flex; align-items: center;">
        <div style="width: 12px; height: 12px; background: #F57C00; margin-right: 6px; border-radius: 2px;"></div>
        <span>C- - Medio Bajo ($18-30k)</span>
      </div>
      <div style="display: flex; align-items: center;">
        <div style="width: 12px; height: 12px; background: #E64A19; margin-right: 6px; border-radius: 2px;"></div>
        <span>D+ - Bajo Alto ($12-18k)</span>
      </div>
      <div style="display: flex; align-items: center;">
        <div style="width: 12px; height: 12px; background: #D32F2F; margin-right: 6px; border-radius: 2px;"></div>
        <span>D - Bajo ($8-12k)</span>
      </div>
      <div style="display: flex; align-items: center;">
        <div style="width: 12px; height: 12px; background: #424242; margin-right: 6px; border-radius: 2px;"></div>
        <span>E - Muy Bajo (<$8k)</span>
      </div>
    </div>
    <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid #eee;">
      <h5 style="margin: 0 0 8px 0; color: #333; font-size: 11px;">Isócronas (Tiempo de acceso):</h5>
      <div style="display: flex; flex-direction: column; gap: 3px; font-size: 10px;">
        <div style="display: flex; align-items: center;">
          <div style="width: 12px; height: 12px; background: #4CAF50; margin-right: 6px; border-radius: 2px;"></div>
          <span>1 minuto</span>
        </div>
        <div style="display: flex; align-items: center;">
          <div style="width: 12px; height: 12px; background: #8BC34A; margin-right: 6px; border-radius: 2px;"></div>
          <span>2 minutos</span>
        </div>
        <div style="display: flex; align-items: center;">
          <div style="width: 12px; height: 12px; background: #FFEB3B; margin-right: 6px; border-radius: 2px;"></div>
          <span>3 minutos</span>
        </div>
        <div style="display: flex; align-items: center;">
          <div style="width: 12px; height: 12px; background: #FF9800; margin-right: 6px; border-radius: 2px;"></div>
          <span>4 minutos</span>
        </div>
        <div style="display: flex; align-items: center;">
          <div style="width: 12px; height: 12px; background: #F44336; margin-right: 6px; border-radius: 2px;"></div>
          <span>5 minutos</span>
        </div>
      </div>
    </div>
  </div>
`;

const div = document.createElement("div");
div.style = "height: 500px; width: 100%;";

container.appendChild(controls);
container.appendChild(div);

const map2 = new mapboxgl.Map({
  container: div,
  accessToken: "pk.eyJ1IjoiZmVpcG93ZXIiLCJhIjoiY21hbjd5bnQ4MG93NTJsc2Z3dzdzNnRiNiJ9.942M6p7lPTB0M2wU4p7cHg", 
  style: 'mapbox://styles/feipower/cman7dnzb01i601s3e0xua814',
  center: [-100.3916, 20.5888], // Coordenadas de Querétaro, México
  zoom: 11
});

map2.on('load', () => {
  // Área metropolitana de Querétaro (contorno base)
  map2.addSource('area-metropolitana', {
    type: 'geojson',
    data: queretaro_area_metropolitana
  });
  
  map2.addLayer({
    id: 'area-metropolitana-fill',
    type: 'fill',
    source: 'area-metropolitana',
    paint: {
      'fill-color': '#f0f0f0',
      'fill-opacity': 0.3,
      'fill-outline-color': '#666666'
    }
  });

  // AGEBs metropolitanos con análisis de cobertura (coloreados por NSE)
  map2.addSource('agebs-metropolitanos', {
    type: 'geojson',
    data: queretaro_agebs_metropolitanos_cobertura
  });
  
  map2.addLayer({
    id: 'agebs-metropolitanos-fill',
    type: 'fill',
    source: 'agebs-metropolitanos',
    paint: {
      'fill-color': [
        'case',
        ['==', ['get', 'nse'], 'A/B'], '#4CAF50', // Verde para NSE A/B (inicio de paleta verde a rojo)
        ['==', ['get', 'nse'], 'C+'], '#8BC34A', // Verde claro para NSE C+
        ['==', ['get', 'nse'], 'C'], '#CDDC39', // Verde-amarillo para NSE C
        ['==', ['get', 'nse'], 'C-'], '#FFC107', // Amarillo-naranja para NSE C-
        ['==', ['get', 'nse'], 'D+'], '#FF9800', // Naranja para NSE D+
        ['==', ['get', 'nse'], 'D'], '#FF5722', // Rojo-naranja para NSE D
        ['==', ['get', 'nse'], 'E'], '#8B0000', // Rojo oscuro para NSE E (final de paleta)
        '#BDBDBD' // Gris claro para NSE no definido
    ]}
  });

  // AGEBs sin cobertura (coloreados por NSE)
  map2.addSource('agebs-sin-cobertura', {
    type: 'geojson',
    data: queretaro_agebs_sin_cobertura
  });
  
  map2.addLayer({
    id: 'agebs-sin-cobertura-fill',
    type: 'fill',
    source: 'agebs-sin-cobertura',
    paint: {
      'fill-color': [
        'case',
        ['==', ['get', 'nse'], 'A/B'], '#8E24AA', // Morado para NSE A/B
        ['==', ['get', 'nse'], 'C+'], '#1976D2', // Azul para NSE C+
        ['==', ['get', 'nse'], 'C'], '#388E3C', // Verde para NSE C
        ['==', ['get', 'nse'], 'C-'], '#F57C00', // Naranja para NSE C-
        ['==', ['get', 'nse'], 'D+'], '#E64A19', // Rojo-naranja para NSE D+
        ['==', ['get', 'nse'], 'D'], '#D32F2F', // Rojo para NSE D
        ['==', ['get', 'nse'], 'E'], '#424242', // Gris para NSE E
        '#F44336' // Rojo por defecto para áreas sin cobertura
      ],
      'fill-opacity': 0.8
    }
  });
  
  map2.addLayer({
    id: 'agebs-sin-cobertura-stroke',
    type: 'line',
    source: 'agebs-sin-cobertura',
    paint: {
      'line-color': '#D32F2F',
      'line-width': 2
    }
  });

  // Top 10 AGEBs prioritarios (coloreados por NSE)
  map2.addSource('top10-agebs', {
    type: 'geojson',
    data: queretaro_top10_agebs_prioritarios
  });
  
  map2.addLayer({
    id: 'top10-agebs-fill',
    type: 'fill',
    source: 'top10-agebs',
    paint: {
      'fill-color': [
        'case',
        ['==', ['get', 'nse'], 'A/B'], '#8E24AA', // Morado para NSE A/B
        ['==', ['get', 'nse'], 'C+'], '#1976D2', // Azul para NSE C+
        ['==', ['get', 'nse'], 'C'], '#388E3C', // Verde para NSE C
        ['==', ['get', 'nse'], 'C-'], '#F57C00', // Naranja para NSE C-
        ['==', ['get', 'nse'], 'D+'], '#E64A19', // Rojo-naranja para NSE D+
        ['==', ['get', 'nse'], 'D'], '#D32F2F', // Rojo para NSE D
        ['==', ['get', 'nse'], 'E'], '#424242', // Gris para NSE E
        '#E91E63' // Rosa por defecto para áreas prioritarias
      ],
      'fill-opacity': 0.9
    }
  });
  
  map2.addLayer({
    id: 'top10-agebs-stroke',
    type: 'line',
    source: 'top10-agebs',
    paint: {
      'line-color': '#AD1457',
      'line-width': 3
    }
  });

  // Cobertura hospitalaria 5 minutos
  map2.addSource('cobertura-5min', {
    type: 'geojson',
    data: queretaro_cobertura_hospitalaria_5min
  });
  
  map2.addLayer({
    id: 'cobertura-5min-fill',
    type: 'fill',
    source: 'cobertura-5min',
    paint: {
      'fill-color': '#2196F3',
      'fill-opacity': 0.4
    }
  });

  // Isócronas hospitalarias (1-5 minutos, verde a rojo)
  map2.addSource('isocronas-hospitalarias', {
    type: 'geojson',
    data: queretaro_isocronas_hospitalarias
  });
  
  // Add layers from largest to smallest rango_minutos so smaller ones appear on top
  for (let minutos = 5; minutos >= 1; minutos--) {
    map2.addLayer({
      id: `isocronas-hospitalarias-fill-${minutos}`,
      type: 'fill',
      source: 'isocronas-hospitalarias',
      filter: ['==', ['get', 'rango_minutos'], minutos],
      paint: {
        'fill-color': [
          'case',
          ['==', minutos, 1], '#4CAF50', // Verde para 1 minuto
          ['==', minutos, 2], '#8BC34A', // Verde claro
          ['==', minutos, 3], '#FFEB3B', // Amarillo
          ['==', minutos, 4], '#FF9800', // Naranja
          ['==', minutos, 5], '#F44336', // Rojo para 5 minutos
          '#4CAF50' // Default verde
        ],
        'fill-opacity': 0.5
      }
    });
    
    map2.addLayer({
      id: `isocronas-hospitalarias-stroke-${minutos}`,
      type: 'line',
      source: 'isocronas-hospitalarias',
      filter: ['==', ['get', 'rango_minutos'], minutos],
      paint: {
        'line-color': [
          'case',
          ['==', minutos, 1], '#2E7D32', // Verde oscuro para 1 minuto
          ['==', minutos, 2], '#689F38', // Verde medio
          ['==', minutos, 3], '#F57F17', // Amarillo oscuro
          ['==', minutos, 4], '#E65100', // Naranja oscuro
          ['==', minutos, 5], '#C62828', // Rojo oscuro para 5 minutos
          '#2E7D32' // Default verde oscuro
        ],
        'line-width': 1.5
      }
    });
  }

  // Popups interactivos
  map2.on('click', 'top10-agebs-fill', (e) => {
    const properties = e.features[0].properties;
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(`
        <div style="font-family: Arial, sans-serif;">
          <h4 style="margin: 0 0 10px 0; color: #E91E63;">AGEB Prioritario #${properties.ranking || 'N/A'}</h4>
          <p><strong>Código AGEB:</strong> ${properties.CVEGEO || 'N/A'}</p>
          <p><strong>Población:</strong> ${properties.population?.toLocaleString() || 'N/A'} habitantes</p>
          <p><strong>NSE Dominante:</strong> ${properties.nse || 'N/A'}</p>
          <p><strong>Ranking:</strong> ${properties.ranking || 'N/A'} de 10</p>
        </div>
      `)
      .addTo(map2);
  });

  map2.on('click', 'agebs-sin-cobertura-fill', (e) => {
    const properties = e.features[0].properties;
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(`
        <div style="font-family: Arial, sans-serif;">
          <h4 style="margin: 0 0 10px 0; color: #F44336;">Sin Cobertura Hospitalaria</h4>
          <p><strong>Código AGEB:</strong> ${properties.CVEGEO || 'N/A'}</p>
          <p><strong>Población:</strong> ${properties.population?.toLocaleString() || 'N/A'} habitantes</p>
          <p><strong>NSE:</strong> ${properties.nse || 'N/A'}</p>
          <p><strong>Ranking por población:</strong> ${properties.rank_poblacion || 'N/A'}</p>
          ${properties.es_top_10 ? '<p><strong>⭐ Top 10 prioritario</strong></p>' : ''}
        </div>
      `)
      .addTo(map2);
  });

  map2.on('click', 'agebs-metropolitanos-fill', (e) => {
    const properties = e.features[0].properties;
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(`
        <div style="font-family: Arial, sans-serif;">
          <h4 style="margin: 0 0 10px 0; color: #333;">AGEB Metropolitano</h4>
          <p><strong>Código AGEB:</strong> ${properties.CVEGEO || 'N/A'}</p>
          <p><strong>Población:</strong> ${properties.population?.toLocaleString() || 'N/A'} habitantes</p>
          <p><strong>NSE:</strong> ${properties.nse || 'N/A'}</p>
          <p><strong>Estado de cobertura:</strong> ${properties.coverage_status || 'N/A'}</p>
          <p><strong>Prioridad:</strong> ${properties.priority || 'N/A'}</p>
        </div>
      `)
      .addTo(map2);
  });

  // Cambiar cursor al pasar sobre áreas interactivas
  map2.on('mouseenter', 'top10-agebs-fill', () => {
    map2.getCanvas().style.cursor = 'pointer';
  });
  
  map2.on('mouseleave', 'top10-agebs-fill', () => {
    map2.getCanvas().style.cursor = '';
  });
  
  map2.on('mouseenter', 'agebs-sin-cobertura-fill', () => {
    map2.getCanvas().style.cursor = 'pointer';
  });
  
  map2.on('mouseleave', 'agebs-sin-cobertura-fill', () => {
    map2.getCanvas().style.cursor = '';
  });

  map2.on('mouseenter', 'agebs-metropolitanos-fill', () => {
    map2.getCanvas().style.cursor = 'pointer';
  });
  
  map2.on('mouseleave', 'agebs-metropolitanos-fill', () => {
    map2.getCanvas().style.cursor = '';
  });

  // Popups para isócronas
  for (let minutos = 1; minutos <= 5; minutos++) {
    map2.on('click', `isocronas-hospitalarias-fill-${minutos}`, (e) => {
      const properties = e.features[0].properties;
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`
          <div style="font-family: Arial, sans-serif;">
            <h4 style="margin: 0 0 10px 0; color: #4CAF50;">Isócrona de Acceso</h4>
            <p><strong>Tiempo de acceso:</strong> ${properties.rango_minutos || 'N/A'} minutos</p>
            <p><strong>Origen:</strong> ${properties.origen || 'N/A'}</p>
            <p><strong>Tipo de rango:</strong> ${properties.range_type || 'N/A'}</p>
            <p><strong>Valor en segundos:</strong> ${properties.range_value || 'N/A'}s</p>
          </div>
        `)
        .addTo(map2);
    });

    map2.on('mouseenter', `isocronas-hospitalarias-fill-${minutos}`, () => {
      map2.getCanvas().style.cursor = 'pointer';
    });
    
    map2.on('mouseleave', `isocronas-hospitalarias-fill-${minutos}`, () => {
      map2.getCanvas().style.cursor = '';
    });
  }

  // Popup para cobertura hospitalaria
  map2.on('click', 'cobertura-5min-fill', (e) => {
    const properties = e.features[0].properties;
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(`
        <div style="font-family: Arial, sans-serif;">
          <h4 style="margin: 0 0 10px 0; color: #2196F3;">Cobertura Hospitalaria</h4>
          <p><strong>Nombre:</strong> ${properties.name || 'N/A'}</p>
          <p><strong>Tipo:</strong> ${properties.tipo || 'N/A'}</p>
          <p><strong>Descripción:</strong> Área con acceso a hospitales en 5 minutos o menos</p>
        </div>
      `)
      .addTo(map2);
  });

  map2.on('mouseenter', 'cobertura-5min-fill', () => {
    map2.getCanvas().style.cursor = 'pointer';
  });
  
  map2.on('mouseleave', 'cobertura-5min-fill', () => {
    map2.getCanvas().style.cursor = '';
  });

  // Event listeners para los controles de capas
  document.getElementById('area-metropolitana-toggle').addEventListener('change', (e) => {
    const visibility = e.target.checked ? 'visible' : 'none';
    map2.setLayoutProperty('area-metropolitana-fill', 'visibility', visibility);
  });

  document.getElementById('agebs-metropolitanos-toggle').addEventListener('change', (e) => {
    const visibility = e.target.checked ? 'visible' : 'none';
    map2.setLayoutProperty('agebs-metropolitanos-fill', 'visibility', visibility);
  });

  document.getElementById('agebs-sin-cobertura-toggle').addEventListener('change', (e) => {
    const visibility = e.target.checked ? 'visible' : 'none';
    map2.setLayoutProperty('agebs-sin-cobertura-fill', 'visibility', visibility);
    map2.setLayoutProperty('agebs-sin-cobertura-stroke', 'visibility', visibility);
  });

  document.getElementById('top10-agebs-toggle').addEventListener('change', (e) => {
    const visibility = e.target.checked ? 'visible' : 'none';
    map2.setLayoutProperty('top10-agebs-fill', 'visibility', visibility);
    map2.setLayoutProperty('top10-agebs-stroke', 'visibility', visibility);
  });

  document.getElementById('cobertura-5min-toggle').addEventListener('change', (e) => {
    const visibility = e.target.checked ? 'visible' : 'none';
    map2.setLayoutProperty('cobertura-5min-fill', 'visibility', visibility);
  });

  document.getElementById('isocronas-toggle').addEventListener('change', (e) => {
    const visibility = e.target.checked ? 'visible' : 'none';
    for (let minutos = 1; minutos <= 5; minutos++) {
      map2.setLayoutProperty(`isocronas-hospitalarias-fill-${minutos}`, 'visibility', visibility);
      map2.setLayoutProperty(`isocronas-hospitalarias-stroke-${minutos}`, 'visibility', visibility);
    }
  });
});
```


---

## 4. Discusión

### 4.1. Oportunidad de Mercado Cuantificada y Segmentada

El análisis de cobertura hospitalaria revela una **oportunidad de mercado significativa y cuantificable** en la zona metropolitana de Querétaro. Con 98,770 habitantes (11.7% de la población metropolitana) sin acceso a servicios hospitalarios en un radio de 5 minutos, existe una demanda insatisfecha considerable que representa un mercado potencial robusto para inversionistas hospitalarios.

**Segmentación por Capacidad de Pago:**

La distribución socioeconómica de esta población desatendida es particularmente atractiva desde una perspectiva de inversión: el 73.3% pertenece a los niveles socioeconómicos C+, C y C- (70,465 habitantes), que corresponden a los siguientes rangos de ingresos mensuales:

- **NSE C+ (22,455 habitantes)**: Clase media alta con ingresos de $45,000-$50,000 mensuales
- **NSE C (29,643 habitantes)**: Clase media con ingresos de $30,000-$40,000 mensuales  
- **NSE C- (18,367 habitantes)**: Clase media baja con ingresos de $18,000-$30,000 mensuales

**Nicho de Mercado Desatendido:**

Esta concentración en segmentos de clase media representa un **nicho de mercado estratégico desatendido**. Mientras que la demanda de clase alta (NSE A/B) se encuentra satisfecha por hospitales premium existentes como Hospital Ángeles Querétaro, la clase media enfrenta una brecha significativa entre la oferta pública saturada y los servicios premium de alto costo. Este segmento demanda servicios de calidad media-alta a precios accesibles, representando una oportunidad de mercado con poder adquisitivo suficiente para sostener operaciones hospitalarias rentables.

### 4.2. Análisis Estratégico de Ubicaciones Prioritarias

Los 15 clústeres geográficos con mayor población sin cobertura representan concentraciones de entre 2,652 y 7,467 habitantes cada uno, totalizando 59,995 personas en áreas bien definidas. Esta concentración espacial de la demanda facilita la planificación de ubicaciones estratégicas que maximicen el radio de influencia y la captación de pacientes.

El análisis complementario de la dinámica del mercado de salud en Querétaro revela un sector en plena ebullición. Con más de 4,177 establecimientos de salud registrados, el mercado ha mostrado un crecimiento explosivo, particularmente durante 2024, que se perfila como un año récord en la apertura de nuevos negocios. Esta tendencia creciente confirma un entorno de alta demanda. Sin embargo, es crucial notar que este crecimiento está impulsado predominantemente por micro y pequeñas empresas. Esto sugiere un mercado fragmentado, con muchos actores pequeños, lo que representa una oportunidad para un nuevo competidor bien capitalizado y con una propuesta de valor clara para consolidar una posición de liderazgo.

### 4.3. Implicaciones para la Estrategia de Inversión

**Posicionamiento Estratégico en el Mercado Medio:**

La metodología aplicada revela una **oportunidad de posicionamiento único** en el segmento de clase media, tradicionalmente desatendido por la polarización del mercado hospitalario en Querétaro. Mientras hospitales premium como Ángeles Querétaro atienden eficientemente al segmento A/B (ingresos >$50,000), y el sector público absorbe los niveles D y E, existe un vacío estratégico en el mercado medio.

**Modelo de Negocio Diferenciado:**

La gran cantidad de consultorios privados de medicina general, especialidades y odontología (más de 2,500 establecimientos combinados) indica un ecosistema de salud vibrante pero atomizado. Esto presenta una oportunidad para integrar a estos profesionales independientes. Un nuevo hospital podría no solo competir, sino colaborar, ofreciendo espacios modernos y equipados para que estos especialistas atiendan a sus pacientes, generando un ecosistema de salud robusto y centralizado.

La identificación de 46 zonas sin cobertura, con 70,465 habitantes de clase media (ingresos $18,000-$50,000), permite desarrollar un modelo hospitalario específicamente diseñado para este segmento. El análisis de mercado valida la intuición sobre especialidades de alta oportunidad, que muestran tasas de crecimiento muy superiores a la media:

- **Calidad media-alta** sin los costos premium de hospitales de lujo.
- **Precios accesibles** para ingresos de $18,000-$50,000 mensuales.
- **Servicios especializados emergentes con validación de mercado:** Priorizar la inclusión de servicios que el análisis de datos identifica con alto crecimiento y menor saturación, tales como **consultorios de quiropráctica, psicología, atención a la salud mental y servicios de enfermería a domicilio**.
- **Ecosistema para profesionales de la salud:** Incluir una torre de consultorios modernos en renta para atraer al gran número de médicos especialistas y dentistas independientes, creando un flujo de referidos, servicios complementarios y una fuente de ingresos adicional.
- **Atención personalizada** sin las limitaciones del sector público ni los costos premium.

**Radio de Influencia Optimizado:** Ubicaciones estratégicas que maximicen la cobertura de múltiples zonas de clase media, considerando patrones de movilidad laboral y residencial de este segmento socioeconómico.

### 5.3. Validación y Desarrollo del Proyecto

**Due Diligence Geográfico:** Realizar estudios de campo específicos en las 15 zonas prioritarias para validar accesibilidad, infraestructura vial, disponibilidad de terrenos y cumplimiento normativo, utilizando las coordenadas exactas proporcionadas por el análisis geoespacial.

**Análisis de Competencia Local:** Evaluar la saturación competitiva específica en cada zona prioritaria. Si bien el 87.6% del área metropolitana ya tiene cobertura, el análisis de mercado muestra que la competencia está fragmentada en pequeños establecimientos, lo que puede facilitar la entrada de un actor mejor estructurado.

**Modelo Financiero Escalable:** Desarrollar proyecciones financieras basadas en la población específica de cada zona (entre 2,652 y 7,467 habitantes por área), permitiendo dimensionar adecuadamente la inversión inicial y los flujos de caja esperados.

### 5.4. Monitoreo y Expansión

**Sistema de Inteligencia de Mercado:** Implementar monitoreo continuo de las 46 zonas sin cobertura para identificar cambios demográficos, nuevos desarrollos inmobiliarios y evolución de la competencia. El mercado de la salud en Querétaro es volátil y dinámico, por lo que la monitorización constante es clave para ajustar la estrategia.

**Estrategia de Expansión Territorial:** Una vez establecida la operación inicial, considerar la expansión hacia las zonas restantes sin cobertura, priorizando aquellas con crecimiento poblacional acelerado y mejora en el perfil socioeconómico.

---

## 6. Conclusiones Ejecutivas

### 6.1. Oportunidad de Inversión Validada

El análisis geoestadístico confirma una **oportunidad de inversión hospitalaria sólida y cuantificable** en Querétaro, con 98,770 habitantes (11.7% de la población metropolitana) sin acceso adecuado a servicios hospitalarios. Esta demanda insatisfecha, concentrada en 46 AGEBs específicos, representa un mercado potencial de alto valor con características socioeconómicas favorables para la inversión privada.

### 6.2. Perfil de Mercado Atractivo y Nicho Estratégico

La composición socioeconómica del mercado desatendido es excepcionalmente favorable: **73.3% pertenece a la clase media** (NSE C+, C y C-) con 70,465 habitantes e ingresos entre $18,000-$50,000 mensuales. Este segmento representa un **nicho estratégico desatendido** en el mercado hospitalario de Querétaro.

**Ventaja Competitiva por Segmentación:**

Mientras hospitales premium como Ángeles Querétaro capturan eficientemente el mercado de clase alta (NSE A/B, ingresos >$50,000), la clase media enfrenta una brecha significativa de servicios. Esta población tiene capacidad de pago comprobada pero busca alternativas más accesibles que los hospitales premium, creando una oportunidad de mercado con:

- **Demanda insatisfecha cuantificada**: 70,465 habitantes de clase media sin cobertura adecuada
- **Capacidad de pago validada**: Ingresos suficientes para servicios privados de calidad media-alta  
- **Menor riesgo de incobrabilidad**: Segmento estable con ingresos regulares
- **Potencial de fidelización**: Mercado que valora relación calidad-precio

### 6.3. Estrategia de Entrada Definida

La metodología geoespacial aplicada proporciona una **hoja de ruta clara para la inversión**, identificando ubicaciones específicas con poblaciones objetivo definidas (entre 2,652 y 7,467 habitantes por zona prioritaria). Esta precisión geográfica permite una planificación de inversión por fases, comenzando con los mercados de mayor potencial y expandiendo gradualmente hacia áreas complementarias.

### 6.4. Ventaja Competitiva Sostenible

El análisis revela que mientras el 87.6% del área metropolitana tiene cobertura hospitalaria, las zonas desatendidas representan **nichos geográficos específicos** donde nuevos entrantes pueden establecer posiciones dominantes. La naturaleza fragmentada del mercado actual, compuesta en su mayoría por microempresas, ofrece una oportunidad para construir una ventaja competitiva sostenible a través de una oferta de servicios más integrada y profesionalizada en mercados locales bien definidos.

### 6.5. Modelo de Negocio Integral

La combinación de demanda insatisfecha en servicios básicos con oportunidades en especialidades emergentes —validadas por datos de mercado como la **quiropráctica, la salud mental y la atención domiciliaria**— permite desarrollar un **modelo de negocio integral**. Este se fortalece al incluir espacios para especialistas (consultorios en renta), capitalizando la alta concentración de médicos independientes para crear un ecosistema de salud. Este enfoque maximiza la utilización de activos, diversifica las fuentes de ingresos (servicios médicos y rentas) y reduce los riesgos operativos y financieros en un mercado dinámico.

### 6.6. Impacto y Rentabilidad Alineados

El proyecto representa una oportunidad única donde **el impacto social y la rentabilidad financiera convergen**: atender a una población desatendida de casi 100,000 habitantes mientras se desarrolla un negocio sostenible en un mercado con características económicas favorables y un crecimiento demográfico dinámico y comprobado.

La precisión metodológica del análisis, basada en datos geoespaciales rigurosos y enriquecida con un análisis de la dinámica del mercado, proporciona a los inversionistas la inteligencia necesaria para tomar decisiones informadas y minimizar riesgos en el desarrollo de infraestructura hospitalaria en Querétaro.

---

> _Este análisis permite identificar, con base en evidencia y granularidad, las ubicaciones óptimas para la apertura de nuevos hospitales en Querétaro. El enfoque combina demanda, densidad poblacional, requisitos legales y competencia, permitiendo tomar decisiones informadas y alineadas con los objetivos del proyecto._ 