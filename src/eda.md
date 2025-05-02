---
title: Análisis exploratorio inicial
toc: false
theme: [glacier, wide]
---

# Introducción al Análisis Exploratorio Geoespacial en Bienes Raíces
![EDA for GIS](./static/eda.png)

El presente análisis exploratorio constituye la primera fase en la evaluación de dinámicas territoriales y patrones espaciales aplicados al sector inmobiliario. A través de técnicas de análisis geoespacial, se busca comprender la distribución, concentración y relaciones contextuales de propiedades inmobiliarias dentro de un área de estudio determinada, integrando variables relevantes como ubicación, accesibilidad, valor del suelo, equipamiento urbano y uso del suelo.

Este estudio preliminar tiene como objetivo identificar correlaciones espaciales, detectar zonas de oportunidad y visualizar tendencias latentes que podrían incidir en la toma de decisiones estratégicas, tanto para desarrolladores como para inversionistas. La integración de datos georreferenciados con atributos estructurales y socioeconómicos permitirá construir una base sólida para modelos posteriores de valoración predictiva, segmentación de mercado y análisis de viabilidad territorial.

Se emplearán herramientas de sistemas de información geográfica (SIG), análisis de proximidad, técnicas de interpolación espacial y visualización cartográfica, orientadas a representar de forma clara la realidad espacial del mercado inmobiliario y sus variaciones.

## Obrera

```js
const Obrera002Data = FileAttachment("./data/gis/002_Obrera.geojson").json()
const VSP0011 = FileAttachment("./data/gis/0011_VSP.geojson").json()
const VSP_AreaComercial_L1 = FileAttachment("./data/gis/0012_VSP_Area_Comercial_L1.geojson").json()
const VSP_AreaComercial_L2 = FileAttachment("./data/gis/0013_VSP_Area_Comercial_L2.geojson").json()
const VSP_AreaComercial_L3 = FileAttachment("./data/gis/0014_VSP_Area_Comercial_L3.geojson").json()
const VSP_AreaComercial_L4 = FileAttachment("./data/gis/0015_VSP_Area_Comercial_L4.geojson").json()
const CV_Bancos = FileAttachment("./data/gis/CiudadValles_Bancos.geojson").json()
const CV_CentrosReligiosos = FileAttachment("./data/gis/Centros_religiosos_CV.geojson").json()
const CV_Cines = FileAttachment("./data/gis/Cines_CV.geojson").json()
const CV_Escuelas = FileAttachment("./data/gis/Escuelas_CV.geojson").json()
const CV_Farmacias = FileAttachment("./data/gis/Farmacias_CV.geojson").json()
const CV_Hospitales = FileAttachment("./data/gis/Hospital_CV.geojson").json()
const CV_Hoteles = FileAttachment("./data/gis/Hoteles_y_moteles_CV.geojson").json()
const CV_Restaurantes = FileAttachment("./data/gis/Restaurantes_CV.geojson").json()
const CV_TiendasDeConveniencia = FileAttachment("./data/gis/Tiendas_de_conveniencia_CV.geojson").json()
const CV_TiendasDepartamentales = FileAttachment("./data/gis/Tiendas_departamentales_CV.geojson").json()

```
```js
import createMap from "./components/simplemap.js";
const container = document.createElement("div");
container.style.height = "400px";
display(container);
createMap(container, [Obrera002Data, CV_Bancos, CV_CentrosReligiosos, CV_Cines, CV_Escuelas, CV_Farmacias, CV_Hospitales, CV_Hoteles, CV_Restaurantes, CV_TiendasDeConveniencia, CV_TiendasDepartamentales]);
```

## Ciudad Valles | San Luis Potosí
```js
import createMap from "./components/simplemap.js";
const container = document.createElement("div");
container.style.height = "400px";
display(container);
createMap(container, [VSP0011, CV_Bancos, CV_CentrosReligiosos, CV_Cines, CV_Escuelas, CV_Farmacias, CV_Hospitales, CV_Hoteles, CV_Restaurantes, CV_TiendasDeConveniencia, CV_TiendasDepartamentales]);
```

### Ciudad Valles | Areas comerciales
```js
import createMap from "./components/simplemap.js";
const container = document.createElement("div");
container.style.height = "400px";
display(container);
createMap(container, [VSP_AreaComercial_L1, VSP_AreaComercial_L2, VSP_AreaComercial_L3, VSP_AreaComercial_L4, CV_Bancos, CV_CentrosReligiosos, CV_Cines, CV_Escuelas, CV_Farmacias, CV_Hospitales, CV_Hoteles, CV_Restaurantes, CV_TiendasDeConveniencia, CV_TiendasDepartamentales]);