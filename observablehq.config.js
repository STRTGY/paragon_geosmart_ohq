// See https://observablehq.com/framework/config for documentation.
export default {
  // The app's title; used in the sidebar and webpage titles.
  title: "Paragon | Geosmart AI for Real State",

  // The pages and sections in the sidebar. If you don't specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    {
      name: "Planteamiento General",
      pages: [
        { name: "Introducción", path: "./pages/00_planteamiento_general/introduccion" },
        { name: "Objetivos del Proyecto", path: "./pages/00_planteamiento_general/objetivos" },
        { name: "Geosmart by STRTGY", path: "./pages/00_planteamiento_general/geosmart" },
      ]
    },
    {
      name: "Vitrinas metodológicas",
      pages: [
        { name: "Marco de Análisis Geoestadístico", path: "./pages/01_metodologia/subproject_base_layer" },
        { name: "Viabilidad de Starbucks en Monterrey", path: "./pages/01_metodologia/mty_starbucks" },
        { name: "Fuentes de Datos", path: "./pages/01_metodologia/project_sources" }
      ]
    },
    {
      name: "Análisis Exploratorio",
      pages: [
        { name: "Mapa Maestro de Subproyectos", path: "./pages/02_analisis_exploratorio/eda" },
        { name: "Comparativa Territorial", path: "./pages/02_analisis_exploratorio/territorial_comparison" },
        { name: "Indicadores Socioeconómicos", path: "./pages/02_analisis_exploratorio/socioeconomic_indicators" },
        { name: "Insights Relevantes", path: "./pages/02_analisis_exploratorio/key_insights" }
      ]
    },
    {
      name: "Subproyectos Residenciales",
      pages: [
        { name: "Vivienda en San Luis Potosí", path: "./pages/03_geosmart/vivienda_sanluispotosi" },
        { name: "Residencial en Ciudad Valles", path: "./pages/03_geosmart/residencial_ciudadvalles" }
      ]
    },
    {
      name: "Subproyectos Comerciales",
      pages: [
        { name: "Plaza Comercial en Ciudad Valles", path: "./pages/03_geosmart/plazacomercial_ciudadvalles" },
        { name: "Vocación de Terreno SLP: Bodega vs Plaza", path: "./pages/03_geosmart/vocacionterreno_sanluispotosi" },
        { name: "Posibles ubicaciones de Starbucks en Monterrey", path: "./pages/03_geosmart/starbucks_mty" }

      ]
    },
    {
      name: "Subproyectos de Salud",
      pages: [
        { name: "Hospital en Ciudad Valles", path: "./pages/03_geosmart/hospital_ciudadvalles" },
        { name: "Hospital en Querétaro", path: "./pages/03_geosmart/hospital_queretaro" }
      ]
    },
    {
      name: "Subproyectos Logísticos",
      pages: [
        { name: "Centro Logístico Mercado Libre SLP", path: "./pages/03_geosmart/mercadolibre_sanluispotosi" }
      ]
    },
    {
      name: "Subproyectos de Expansión",
      pages: [
        { name: "Expansión en Tamuín", path: "./pages/03_geosmart/expansion_tamuin" }
      ]
    },
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="strtgy.png" type="image/png" sizes="32x32">',

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  theme: "cotton", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  footer: "Construído por STRTGY AI (2025).", // what to show in the footer (HTML)
  sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  typographer: true, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
};
