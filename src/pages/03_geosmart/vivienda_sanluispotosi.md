---
title: Informe de Resultados | Análisis Geoestadístico para Vivienda en San Luis Potosí
index: true
toc: false
keywords: vivienda, San Luis Potosí, análisis geoestadístico, INEGI, DENUE, SCINCE, mercado inmobiliario
---

# Informe de Resultados: Análisis Geoestadístico para Vivienda en San Luis Potosí

## 1. Resumen Ejecutivo

<!-- Breve descripción del objetivo, hallazgos principales y recomendaciones clave. -->

---

## 2. Introducción

**Contexto del Mercado de Vivienda en San Luis Potosí**

San Luis Potosí es una de las ciudades con mayor crecimiento en el sector inmobiliario residencial en el centro-norte de México. El análisis de vocación inmobiliaria es clave para identificar zonas óptimas para el desarrollo de vivienda, considerando factores como densidad de trabajadores formales, acceso a créditos de vivienda, conectividad y competencia.

**Objetivos Específicos del Proyecto**

El presente análisis geoestadístico tiene como objetivos específicos: (1) identificar la vocación inmobiliaria óptima para desarrollos residenciales en San Luis Potosí mediante análisis geoestadístico de fuentes oficiales; (2) elaborar un ranking de zonas basado en indicadores cuantitativos utilizando datos de INEGI, DENUE, Google Maps y SCINCE; (3) evaluar conectividad y proximidad a centros de trabajo y escuelas; (4) analizar competencia y nivel de saturación del mercado; (5) identificar amenidades y diferenciadores de valor.

---

## 3. Resultados

### 3.1. Mapas de Densidad y Acceso a Créditos

La densidad de trabajadores formales y el acceso a créditos de vivienda son indicadores fundamentales para identificar las zonas con mayor potencial de demanda residencial. Este mapa visualiza la concentración de población económicamente activa con capacidad de adquisición, combinando datos del IMSS sobre trabajadores registrados y estadísticas de INFONAVIT sobre derechohabientes con posibilidad de obtener créditos hipotecarios.

Las zonas con mayor densidad de color representan áreas donde existe una concentración significativa de demanda potencial, lo que las convierte en ubicaciones estratégicas para el desarrollo de proyectos habitacionales orientados al segmento medio y medio-alto.

<!-- Visualización de densidad de trabajadores formales y acceso a créditos de vivienda. -->
```js
const div = display(document.createElement("div"));
div.style = "height: 500px;";

const map1 = new mapboxgl.Map({
  container: div,
  accessToken: "pk.eyJ1IjoiZmVpcG93ZXIiLCJhIjoiY21hbjd5bnQ4MG93NTJsc2Z3dzdzNnRiNiJ9.942M6p7lPTB0M2wU4p7cHg", 
  style: 'mapbox://styles/feipower/cman7dnzb01i601s3e0xua814',
  center: [-101.0069, 22.1565], // Coordenadas de San Luis Potosí, México
  zoom: 12
});
```

### 3.2. Análisis de Conectividad y Proximidad

La conectividad urbana y la proximidad a centros de trabajo y educativos son factores críticos en la decisión de compra de vivienda. Este análisis espacial muestra las isócronas de tiempo de traslado hacia los principales polos de empleo, universidades y escuelas de la ciudad, identificando las zonas mejor conectadas mediante transporte público y vialidades principales.

El mapa integra datos de movilidad de Google Maps, ubicación de centros de trabajo del DENUE y localización de instituciones educativas, permitiendo identificar las áreas con mejor accesibilidad y menor tiempo de desplazamiento, características altamente valoradas por los compradores de vivienda.

<!-- Mapas y tablas de conectividad a centros de trabajo y escuelas. -->
```js
const div = display(document.createElement("div"));
div.style = "height: 500px;";

const map2 = new mapboxgl.Map({
  container: div,
  accessToken: "pk.eyJ1IjoiZmVpcG93ZXIiLCJhIjoiY21hbjd5bnQ4MG93NTJsc2Z3dzdzNnRiNiJ9.942M6p7lPTB0M2wU4p7cHg", 
  style: 'mapbox://styles/feipower/cman7dnzb01i601s3e0xua814',
  center: [-101.0069, 22.1565], // Coordenadas de San Luis Potosí, México
  zoom: 12
});
```

### 3.3. Competencia y Saturación del Mercado

El análisis de competencia permite identificar zonas con oportunidades de desarrollo al evaluar la oferta existente y el nivel de saturación del mercado. Este mapa muestra la ubicación de desarrollos residenciales actuales, su tipología (interés social, medio, residencial) y el inventario disponible, permitiendo identificar nichos de mercado desatendidos.

La información se complementa con datos de velocidad de venta y absorción del mercado, proporcionando una visión integral de las dinámicas competitivas en cada zona. Las áreas con menor densidad de desarrollos pero alta demanda potencial representan las mejores oportunidades de inversión.

<!-- Localización de desarrollos residenciales existentes y competencia. -->
```js
const div = display(document.createElement("div"));
div.style = "height: 500px;";

const map3 = new mapboxgl.Map({
  container: div,
  accessToken: "pk.eyJ1IjoiZmVpcG93ZXIiLCJhIjoiY21hbjd5bnQ4MG93NTJsc2Z3dzdzNnRiNiJ9.942M6p7lPTB0M2wU4p7cHg", 
  style: 'mapbox://styles/feipower/cman7dnzb01i601s3e0xua814',
  center: [-101.0069, 22.1565], // Coordenadas de San Luis Potosí, México
  zoom: 12
});
```

### 3.4. Ranking de Zonas

El ranking integral de zonas combina todos los indicadores analizados mediante un modelo de evaluación multicriterio que pondera densidad de demanda, conectividad, competencia y potencial de crecimiento. Este mapa de calor muestra las zonas ordenadas según su potencial para el desarrollo de vivienda, facilitando la toma de decisiones estratégicas.

Las zonas se clasifican en cinco categorías (muy alto, alto, medio, bajo, muy bajo potencial) considerando factores como: densidad de trabajadores formales, acceso a créditos, tiempo de traslado a centros de trabajo, proximidad a servicios, nivel de competencia y tendencias de crecimiento urbano.

<!-- Tabla y mapa de zonas con mayor potencial. -->
```js
const div = display(document.createElement("div"));
div.style = "height: 500px;";

const map4 = new mapboxgl.Map({
  container: div,
  accessToken: "pk.eyJ1IjoiZmVpcG93ZXIiLCJhIjoiY21hbjd5bnQ4MG93NTJsc2Z3dzdzNnRiNiJ9.942M6p7lPTB0M2wU4p7cHg", 
  style: 'mapbox://styles/feipower/cman7dnzb01i601s3e0xua814',
  center: [-101.0069, 22.1565], // Coordenadas de San Luis Potosí, México
  zoom: 12
});
```

---

## 4. Discusión

- Interpretación de los resultados en el contexto del mercado inmobiliario.
- Implicaciones para la estrategia de desarrollo de vivienda.
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
- Impacto esperado para el sector vivienda en San Luis Potosí.

---

> _Este análisis permite identificar, con base en evidencia y granularidad, las zonas de San Luis Potosí donde el desarrollo de vivienda tendría mayor probabilidad de éxito. El enfoque combina datos sociodemográficos, conectividad, competencia y tendencias de mercado, permitiendo tomar decisiones informadas y alineadas con los objetivos del proyecto._ 