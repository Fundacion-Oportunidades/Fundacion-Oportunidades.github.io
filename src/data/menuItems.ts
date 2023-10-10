import type { MenuItem } from "../types/types";

const menuItems: MenuItem[] = [
  {
    title: "La Fundación",
    url: "",
    options: [
      {
        title: "Sobre nosotros",
        url: "/site/sobre-nosotros",
      },
      // {
      //   title: "Consejo asesor",
      //   url: "/site/council",
      // },
      // {
      //   title: "Equipo",
      //   url: "/site/team",
      // },
    ],
  },
  {
    title: "Becas de Formación",
    url: "",
    options: [
      {
        title: "Presentación",
        url: "/site/becas-de-formacion",
      },
      {
        title: "Cómo solicitar becas",
        url: "/site/como-solicitar-becas",
      },
      {
        title: "Cómo trabajamos",
        url: "/site/como-trabajamos",
      },
      {
        title: "Criterios de valoración",
        url: "/site/criterios-de-valoracion",
      },
      {
        title: "Becas disponibles",
        url: "/site/becas-disponibles",
      },
      {
        title: "Preguntas frecuentes",
        url: "/site/preguntas-frecuentes",
      },
    ],
  },
  {
    title: "Red de Oportunidades",
    url: "",
    options: [
      {
        title: "Presentación",
        url: "/site/red-de-oportunidades",
      },
      // {
      //   title: "Networking",
      //   url: "/site/networking",
      // },
      // {
      //   title: "Ofertas laborales",
      //   url: "/site/job_openings",
      // },
    ],
  },
  {
    title: "Contacto",
    url: "/site/contacto",
    options:[]
  },
  {
    title: "Solicitá tu beca",
    url: "/site/",
    options:[]
  },
];

export default menuItems;
