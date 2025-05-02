// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Paragon | Geosmart AI for Real State",

  // The pages and sections in the sidebar. If you don’t specify this option,
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
        // { name: "Vivienda en Zona Laboral - SLP", path: "/residential_slp" },
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
    // {      name: "Subproyectos Residenciales",
    //   pages: [
    //     { name: "Vivienda en Zona Laboral - SLP", path: "/residential_slp" }
    //   ]
    // },

    // {
    //   name: "Subproyectos Comerciales",
    //   pages: [
    //     { name: "Plaza Mixta - Ciudad Valles", path: "/plaza_valles" },
    //     { name: "Ubicaciones Starbucks - Monterrey", path: "/starbucks_mty" },
    //     { name: "Terreno Estratégico - Tamuín", path: "/expansion_tamuin" },
    //     { name: "Bodega vs Plaza - SLP", path: "/plaza_vs_bodega" }
    //   ]
    // },

    // {
    //   name: "Subproyectos de Salud",
    //   pages: [
    //     { name: "Hospital Privado - SLP", path: "/hospital_slp" },
    //     { name: "Hospitales Potenciales - Querétaro", path: "/hospitales_qro" }
    //   ]
    // },

    // {
    //   name: "Subproyectos Logísticos",
    //   pages: [
    //     { name: "Centro Logístico para Mercado Libre", path: "/mercadolibre_slp" }
    //   ]
    // },

    // {
    //   name: "Síntesis Ejecutiva",
    //   pages: [
    //     { name: "Resumen Estratégico", path: "/executive_summary" },
    //     { name: "Mapa Interactivo Final", path: "/mapa_sintesis" },
    //     { name: "Recomendaciones por Proyecto", path: "/recommendations" },
    //     { name: "Descargables y Anexos", path: "/downloads" }
    //   ]
    // },
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
