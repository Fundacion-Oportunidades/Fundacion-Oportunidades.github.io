import type { MenuItem } from "../types/types";

const menuItems: MenuItem[] = [
  {
    title: "La Fundación",
    url: "",
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
    url: "",
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
    url: "",
    options: [
      {
        title: "Presentación",
        url: "/site/net_presentation",
      },
      {
        title: "Networking",
        url: "/site/networking",
      },
      {
        title: "Ofertas laborales",
        url: "/site/job_openings",
      },
    ],
  },
  {
    title: "Contacto",
    url: "/site/contact_us",
  },
  {
    title: "Ingresa",
    url: "/site/register",
  },
];

export default menuItems;
