import type { MenuItem } from "../types/types";

const menuItems: MenuItem[] = [
  {
    title: "La fundación",
    options: [
      {
        title: "Sobre nosotros",
        url: "/site/about_us",
      },
      {
        title: "Consejo asesor",
        url: "/site/council",
      },
      {
        title: "Equipo",
        url: "/site/team",
      },
    ],
  },
  {
    title: "Becas de Formación",
    options: [
      {
        title: "Presentación",
        url: "/site/presentation",
      },
      {
        title: "Cómo solicitar becas",
        url: "/site/how_to",
      },
      {
        title: "Cómo trabajamos",
        url: "/site/how_we_work",
      },
      {
        title: "Criterios de valoración",
        url: "/site/criteria",
      },
      {
        title: "Becas disponibles",
        url: "/site/scholarships",
      },
      {
        title: "Preguntas frecuentes",
        url: "/site/FAQ",
      },
    ],
  },
  {
    title: "Red de Oportunidades",
    options: [
      {
        title: "Presentación",
        url: "/site/presentation",
      },
      {
        title: "Oportunidades de Networking",
        url: "/site/networking",
      },
      {
        title: "Oportunidades de Trabajo",
        url: "/site/job_openings",
      },
    ],
  },
  {
    title: "Contacto",
    options: [
      {
        title: "Contactanos",
        url: "/site/contact_us",
      },
    ],
  },
];

export default menuItems;
