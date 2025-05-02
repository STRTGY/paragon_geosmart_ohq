---
title: Mapa Maestro de Subproyectos
toc: false
index: true
keywords: mapa, subproyectos, visualización geoespacial
theme: [light, wide, alt]
---

# Mapa Maestro de Subproyectos
## Propósito

Este mapa interactivo muestra la ubicación de todos los subproyectos analizados en el reporte Paragon. Permite visualizar la distribución geográfica y explorar relaciones espaciales entre los distintos terrenos y contextos evaluados.

## Obrera

```js
const Obrera002Data = FileAttachment("../../data/gis/002_Obrera.geojson").json()
const VSP0011 = FileAttachment("../../data/gis/0011_VSP.geojson").json()
const VSP_AreaComercial_L1 = FileAttachment("../../data/gis/0012_VSP_Area_Comercial_L1.geojson").json()
const VSP_AreaComercial_L2 = FileAttachment("../../data/gis/0013_VSP_Area_Comercial_L2.geojson").json()
const VSP_AreaComercial_L3 = FileAttachment("../../data/gis/0014_VSP_Area_Comercial_L3.geojson").json()
const VSP_AreaComercial_L4 = FileAttachment("../../data/gis/0015_VSP_Area_Comercial_L4.geojson").json()
const CV_Bancos = FileAttachment("../../data/gis/CiudadValles_Bancos.geojson").json()
const CV_CentrosReligiosos = FileAttachment("../../data/gis/Centros_religiosos_CV.geojson").json()
const CV_Cines = FileAttachment("../../data/gis/Cines_CV.geojson").json()
const CV_Escuelas = FileAttachment("../../data/gis/Escuelas_CV.geojson").json()
const CV_Farmacias = FileAttachment("../../data/gis/Farmacias_CV.geojson").json()
const CV_Hospitales = FileAttachment("../../data/gis/Hospital_CV.geojson").json()
const CV_Hoteles = FileAttachment("../../data/gis/Hoteles_y_moteles_CV.geojson").json()
const CV_Restaurantes = FileAttachment("../../data/gis/Restaurantes_CV.geojson").json()
const CV_TiendasDeConveniencia = FileAttachment("../../data/gis/Tiendas_de_conveniencia_CV.geojson").json()
const CV_TiendasDepartamentales = FileAttachment("../../data/gis/Tiendas_departamentales_CV.geojson").json()

```
<div class="card"> 

```js
import createMap from "../../components/simplemap.js";
const container = document.createElement("div");
container.style.height = "75vh";
container.style.width = "70vw";
display(container);
createMap(container, [Obrera002Data, VSP0011, VSP_AreaComercial_L1, VSP_AreaComercial_L2, VSP_AreaComercial_L3, VSP_AreaComercial_L4]);
```
</div>

## Funcionalidades sugeridas

- Filtro por tipo de proyecto (residencial, comercial, salud, logístico).
- Hover con resumen ejecutivo de cada caso.
- Colores diferenciados por categoría.
- Botón de zoom a cada coordenada o región.
- Capas activables: zonas económicas, rutas, densidad poblacional, etc.

Este mapa sirve como punto de partida para el análisis exploratorio y para identificar patrones emergentes entre los distintos contextos territoriales.
