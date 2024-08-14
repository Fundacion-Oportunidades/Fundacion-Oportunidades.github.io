import type { MenuItem } from "../types/types";

const menuItems: MenuItem[] = [
  {
    title: "La Fundación",
    url: "",
    options: [
      {
        title: "Sobre nosotros",
        url: "/sobre-nosotros",
      },
      {
        title: "Consejo de Benefactores",
        url: "/consejo-de-benefactores",
      }
      // {
      //   title: "Consejo asesor",
      //   url: "/council",
      // },
      // {
      //   title: "Equipo",
      //   url: "/team",
      // },
    ],
  },
  {
    title: "Becas de Formación",
    url: "",
    options: [
      {
        title: "Presentación",
        url: "/becas-de-formacion",
      },
      {
        title: "Cómo solicitar becas",
        url: "/como-solicitar-becas",
      },
      {
        title: "Cómo trabajamos",
        url: "/como-trabajamos",
      },
      {
        title: "Criterios de valoración",
        url: "/criterios-de-valoracion",
      },
      {
        title: "Becas disponibles",
        url: "/becas-disponibles",
      },
      {
        title: "Preguntas frecuentes",
        url: "/preguntas-frecuentes",
      },
    ],
  },
  {
    title: "Red de Oportunidades",
    url: "",
    options: [
      {
        title: "Presentación",
        url: "/red-de-oportunidades",
      },
      // {
      //   title: "Networking",
      //   url: "/networking",
      // },
      // {
      //   title: "Ofertas laborales",
      //   url: "/job_openings",
      // },
    ],
  },
  {
    title: "Contacto",
    url: "/contacto",
    options:[]
  },
  {
    title: "Solicitá tu beca",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdP8Wf8dEGuHzAKKy_6jTs7qUbiwRyXdg_KWXR6jyJ16iXbUQ/viewform?usp=sf_link",
    options:[]
  },
];

export default menuItems;
