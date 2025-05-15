---
title: Informe de Resultados | Análisis Geoestadístico para Expansión de Starbucks en la Zona Metropolitana de Monterrey
toc: false
index: true
keywords: Starbucks, expansión, granularidad, isocronas, HERE API, INEGI, DENUE, movilidad, datos granulares, Monterrey, ZMM
---

# Informe de Resultados: Análisis Geoestadístico para Expansión de Starbucks en la ZMM

## 1. Resumen Ejecutivo

<!-- Breve descripción del objetivo, hallazgos principales y recomendaciones clave. -->

---

## 2. Introducción

**Contexto del Mercado de Cafeterías en la Zona Metropolitana de Monterrey**

El café es una bebida esencial en la vida diaria de los mexicanos, siendo la segunda bebida más consumida después del agua. El consumo de café en México ha crecido en los últimos años, incluso en ciudades con altas temperaturas como Monterrey. Se espera que el consumo en el país siga aumentando a un ritmo del 2% anual. Sin embargo, el consumo per cápita en México (1.6 kilos al año) es significativamente menor que en países como Brasil (6 kilos al año), lo que indica una tarea importante para impulsar tanto el consumo como la cultura del café en el país. Un aspecto importante para este impulso es fomentar la comercialización de granos mexicanos, buscando que "México le venda a México en sus diferentes entidades".

En la zona metropolitana de Monterrey compuesta por 18 municipios (Monterrey, San Pedro Garza García, San Nicolás de los Garza, Guadalupe, Apodaca, General Escobedo, Santa Catarina, Juárez, García, Cadereyta Jiménez, Santiago, Salinas Victoria, Pesquería, Ciénega de Flores, General Zuazua, El Carmen, Hidalgo y Abasolo), se registran alrededor de 3,300 (DENUE) cafeterías, incluyendo grandes franquicias y pequeños emprendedores. En este panorama, el mercado está dominado por Starbucks.

**Starbucks: El Actor Dominante**

Starbucks es la cadena de cafeterías más grande del mundo y domina el mercado mexicano, con una **cuota de mercado que supera el 50%** al tercer trimestre de 2023, a pesar de tener solo alrededor del 1% de las más de 75,000 tiendas especializadas en el país. La marca llegó a México en 2002. Al tercer trimestre de 2023, Alsea, el operador de Starbucks en México, reportó **796 unidades en el país**, 50 más que en 2019 antes de la pandemia. Starbucks tiene la meta de **alcanzar las 1,000 unidades en México para 2026**. Las ventas de la cadena en mismas tiendas subieron un 24.9% al tercer trimestre de 2023. El formato *drive-thru* o autoservicio, que cuenta con 185 unidades en el país, tuvo un crecimiento del 30% y representará más de la mitad de las nuevas aperturas. La marca también busca fortalecer su canal digital a través de su aplicación móvil, que tiene alrededor de 1 millón de clientes y representa el 30% de sus ventas, ofreciendo beneficios exclusivos e interacción mejorada.

El **mercado objetivo principal de Starbucks** consiste en **consumidores jóvenes, urbanos y con recursos económicos**, con un fuerte énfasis en los Millennials (25-40 años) y la Generación Z (18-24 años). Estos grupos son atraídos no solo por los productos, sino por la experiencia general. Los Millennials valoran el enfoque de Starbucks en el estilo de vida y la comunidad, buscando un ambiente elegante y acogedor para disfrutar de una bebida. La Generación Z valora la responsabilidad social y ambiental, lo cual se alinea con el compromiso de Starbucks con el abastecimiento ético y la sostenibilidad. Aunque asociado con el café, más de un tercio de los clientes habituales de Starbucks rara vez o nunca toman café, siendo esta tendencia particularmente notable entre el público más joven.


**Objetivos Específicos del Proyecto**

El presente análisis geoestadístico tiene como objetivos específicos: (1) identificar con alta granularidad las micro-zonas óptimas para la expansión de Starbucks en la ZMM, considerando patrones de movilidad real mediante isocronas temporales; (2) evaluar la viabilidad comercial de ubicaciones potenciales basándose en datos sociodemográficos, actividad económica y competencia existente; (3) segmentar el mercado según perfiles de consumidor para alinear la oferta con las necesidades específicas de cada zona; (4) priorizar ubicaciones estratégicas mediante un sistema de puntuación multifactorial que integre variables como densidad de oficinas, nivel socioeconómico y accesibilidad; y (5) generar recomendaciones accionables para la apertura de nuevas sucursales, con énfasis en el formato drive-thru que ha mostrado un crecimiento del 30% a nivel nacional. Este enfoque metodológico busca contribuir directamente al objetivo corporativo de Starbucks de alcanzar 1,000 unidades en México para 2026, identificando oportunidades específicas en la ZMM que maximicen el retorno de inversión y fortalezcan la presencia de la marca en el mercado regiomontano.


---

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

## 3. Resultados

### 3.1. Mapas de Isocronas y Accesibilidad

<!-- Visualización de áreas de influencia por tiempo de viaje, comparación entre horarios y modos de transporte. -->

### 3.2. Análisis Sociodemográfico y Económico

<!-- Mapas y tablas de densidad de población, ingreso, empleo, etc. -->

### 3.3. Mapeo de Competencia y Puntos de Interés

<!-- Localización de Starbucks existentes y competidores. -->

### 3.4. Priorización de Micro-Zonas

<!-- Tabla y mapa de micro-zonas con mayor puntaje. -->

---

## 4. Discusión

- Interpretación de los resultados en el contexto del negocio.
- Implicaciones para la estrategia de expansión de Starbucks.
- Limitaciones del análisis y consideraciones éticas.

---

## 5. Recomendaciones

- Zonas sugeridas para apertura de nuevas sucursales.
- Estrategias diferenciadas según perfil de cliente y micro-zona.
- Siguientes pasos para validación en campo y toma de decisión.

---

## 6. Conclusiones

- Resumen de los hallazgos más relevantes.
- Valor agregado de la granularidad y el enfoque geoestadístico.
- Impacto esperado para Starbucks en la ZMM.

---

## 7. Anexos

- Detalle de fuentes de datos y scripts utilizados.
- Metodología técnica para generación de isocronas.
- Tablas y mapas complementarios.

---

> _Este análisis permite identificar, con base en evidencia y granularidad, las zonas de la ZMM donde la apertura de un nuevo Starbucks tendría mayor probabilidad de éxito. El enfoque combina accesibilidad real, características sociodemográficas, dinámica económica, competencia y tendencias de comportamiento, permitiendo tomar decisiones informadas y alineadas con los objetivos comerciales de la marca._
