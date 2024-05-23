import type { Universities } from "../types/types";

const universities: Universities[] = [
  {
    imageUrl:
      "/assets/Universidades/UAI-03.png",
    imageAlt: "Universidad Abierta Interamericana",
    url: "/becas/uai",
    title: "uai",
    description: "La UAI nos ofrece 1 beca del 100%, y becas ilimitadas con entre un 20 y 30% de descuento en la cuota, dependiendo la carrera elegida",
    carrers: [
      {
        name: "Licenciatura en Diseño de Interiores",
        url: "https://uai.edu.ar/facultades/arquitectura/licenciatura-en-dise%C3%B1o-de-interiores/",
        description:"Arquitectura"
      },
      {
        name: "Licenciatura en Diseño Gráfico",
        url: "https://uai.edu.ar/facultades/ciencias-de-la-comunicaci%C3%B3n/licenciatura-en-dise%C3%B1o-gr%C3%A1fico/",
        description:"Ciencias de la Comunicación"
      },
      {
        name: "Licenciatura en Periodismo",
        url: "https://uai.edu.ar/facultades/ciencias-de-la-comunicaci%C3%B3n/licenciatura-en-periodismo/",
        description:"Ciencias de la Comunicación"
      },
      {
        name: "Licenciatura en Producción y Realización Audiovisual",
        url: "https://uai.edu.ar/facultades/ciencias-de-la-comunicaci%C3%B3n/licenciatura-en-producci%C3%B3n-y-realizaci%C3%B3n-audiovisual/",
        description:"Ciencias de la Comunicación"
      },
      {
        name: "Licenciatura en Publicidad",
        url: "https://uai.edu.ar/facultades/ciencias-de-la-comunicaci%C3%B3n/licenciatura-en-publicidad/",
        description:"Ciencias de la Comunicación"
      },
      {
        name: "Licenciatura en Relaciones Públicas",
        url: "https://uai.edu.ar/facultades/ciencias-de-la-comunicaci%C3%B3n/licenciatura-en-relaciones-p%C3%BAblicas/",
        description:"Ciencias de la Comunicación"
      },
      {
        name: "Licenciatura en Ciencias de la Educación",
        url: "https://uai.edu.ar/facultades/ciencias-de-la-educaci%C3%B3n-y-psicopedagog%C3%ADa/licenciatura-en-ciencias-de-la-educaci%C3%B3n/",
        description:"Ciencias de la educación y psicopedagogía"
      },
      {
        name: "Licenciatura en Educación Inicial",
        url: "https://uai.edu.ar/facultades/ciencias-de-la-educaci%C3%B3n-y-psicopedagog%C3%ADa/licenciatura-en-educaci%C3%B3n-inicial/",
        description:"Ciencias de la educación y psicopedagogía"
      },
      {
        name: "Licenciatura en Gestión de Instituciones Educativas",
        url: "https://uai.edu.ar/facultades/ciencias-de-la-educaci%C3%B3n-y-psicopedagog%C3%ADa/licenciatura-en-gesti%C3%B3n-de-instituciones-educativas/",
        description:"Ciencias de la educación y psicopedagogía"
      },
      {
        name: "Lic. en Gestión de Instituciones Educativas - Ciclo de Complementación Curricular (A Distancia)",
        url: "https://uai.edu.ar/facultades/ciencias-de-la-educaci%c3%b3n-y-psicopedagog%c3%ada/lic-en-gesti%c3%b3n-de-instituciones-educativas-ciclo-de-complementaci%c3%b3n-curricular-a-distancia/",
        description:"Ciencias de la educación y psicopedagogía"
      },
      {
        name: "Licenciatura en Psicopedagogía",
        url: "https://uai.edu.ar/facultades/ciencias-de-la-educaci%C3%B3n-y-psicopedagog%C3%ADa/licenciatura-en-psicopedagog%C3%ADa/",
        description:"Ciencias de la educación y psicopedagogía"
      },
      {
        name: "Contador Público",
        url: "https://uai.edu.ar/facultades/ciencias-de-la-educaci%C3%B3n-y-psicopedagog%C3%ADa/licenciatura-en-psicopedagog%C3%ADa/",
        description:"Ciencias económicas"
      },
      {
        name: "Licenciatura en Administración",
        url: "https://uai.edu.ar/facultades/ciencias-econ%C3%B3micas/licenciatura-en-administraci%C3%B3n/",
        description:"Ciencias económicas"
      },
      {
        name: "Licenciatura en Comercialización (Marketing)",
        url: "https://uai.edu.ar/facultades/ciencias-econ%C3%B3micas/licenciatura-en-comercializaci%C3%B3n-marketing/",
        description:"Ciencias económicas"
      },
      {
        name: "Licenciatura en Comercio Internacional",
        url: "https://uai.edu.ar/facultades/ciencias-econ%C3%B3micas/licenciatura-en-comercio-internacional/",
        description:"Ciencias económicas"
      },
      {
        name: "Licenciatura en Economía",
        url: "https://uai.edu.ar/facultades/ciencias-econ%C3%B3micas/licenciatura-en-econom%C3%ADa/",
        description:"Ciencias económicas"
      },
      {
        name: "Licenciatura en Administración (A Distancia)",
        url: "https://uai.edu.ar/facultades/ciencias-econ%C3%B3micas/licenciatura-en-administraci%C3%B3n-a-distancia/",
        description:"Ciencias económicas"
      },
      {
        name: "Licenciatura en Comercialización (Marketing a Distancia)",
        url: "https://uai.edu.ar/facultades/ciencias-econ%C3%B3micas/licenciatura-en-comercializaci%C3%B3n-marketing-a-distancia/",
        description:"Ciencias económicas"
      },
      {
        name: "Abogacía",
        url: "https://uai.edu.ar/facultades/derecho-y-ciencias-pol%C3%ADticas/abogac%C3%ADa/",
        description:"Derecho y ciencias políticas"
      },
      {
        name: "Licenciatura en Ciencia Política",
        url: "https://uai.edu.ar/facultades/derecho-y-ciencias-pol%C3%ADticas/licenciatura-en-ciencia-pol%C3%ADtica/",
        description:"Derecho y ciencias políticas"
      },
      {
        name: "Licenciatura en Relaciones Internacionales",
        url: "https://uai.edu.ar/facultades/derecho-y-ciencias-pol%C3%ADticas/licenciatura-en-relaciones-internacionales/",
        description:"Derecho y ciencias políticas"
      },
      {
        name: "Licenciatura en Enfermería",
        url: "https://uai.edu.ar/facultades/medicina-y-ciencias-de-la-salud/licenciatura-en-enfermer%C3%ADa/",
        description:"Medicina y ciencias de la salud"
      },
      {
        name: "Licenciatura en Instrumentación Quirúrgica",
        url: "https://uai.edu.ar/facultades/medicina-y-ciencias-de-la-salud/licenciatura-en-instrumentaci%C3%B3n-quir%C3%BArgica/",
        description:"Medicina y ciencias de la salud"
      },
      {
        name: "Licenciatura en Kinesiología y Fisiatría",
        url: "https://uai.edu.ar/facultades/medicina-y-ciencias-de-la-salud/licenciatura-en-kinesiolog%C3%ADa-y-fisiatr%C3%ADa/",
        description:"Medicina y ciencias de la salud"
      },
      {
        name: "Licenciatura en Nutrición",
        url: "https://uai.edu.ar/facultades/medicina-y-ciencias-de-la-salud/licenciatura-en-nutrici%C3%B3n/",
        description:"Medicina y ciencias de la salud"
      },
      {
        name: "Licenciatura en Actividad Física y Deportes",
        url: "https://uai.edu.ar/facultades/motricidad-humana-y-deportes/licenciatura-en-actividad-f%C3%ADsica-y-deportes/",
        description:"Motricidad humana y deportes"
      },
      {
        name: "Licenciatura en Musicoterapia",
        url: "https://uai.edu.ar/facultades/psicolog%C3%ADa-y-relaciones-humanas/licenciatura-en-musicoterapia/",
        description:"Psicología y relaciones humanas"
      },
      {
        name: "Licenciatura en Psicología",
        url: "https://uai.edu.ar/facultades/psicolog%C3%ADa-y-relaciones-humanas/licenciatura-en-psicolog%C3%ADa/",
        description:"Psicología y relaciones humanas"
      },
      {
        name: "Licenciatura en Terapia Ocupacional",
        url: "https://uai.edu.ar/facultades/psicolog%C3%ADa-y-relaciones-humanas/licenciatura-en-terapia-ocupacional/",
        description:"Psicología y relaciones humanas"
      },
      {
        name: "Licenciatura en Gestión de Tecnología Informática",
        url: "https://uai.edu.ar/facultades/tecnolog%C3%ADa-inform%C3%A1tica/licenciatura-en-gesti%C3%B3n-de-tecnolog%C3%ADa-inform%C3%A1tica/",
        description:"Tecnología informática"
      },
      {
        name: "Licenciatura en Matemática",
        url: "https://uai.edu.ar/facultades/tecnolog%C3%ADa-inform%C3%A1tica/licenciatura-en-matem%C3%A1tica/",
        description:"Tecnología informática"
      },
      {
        name: "Licenciatura en Gastronomía",
        url: "https://uai.edu.ar/facultades/turismo-y-hospitalidad/licenciatura-en-gastronom%C3%ADa/",
        description:"Turismo y hospitalidad"
      },
      {
        name: "Licenciatura en Hotelería",
        url: "https://uai.edu.ar/facultades/turismo-y-hospitalidad/licenciatura-en-hoteler%C3%ADa/",
        description:"Turismo y hospitalidad"
      },
      {
        name: "Licenciatura en Turismo",
        url: "https://uai.edu.ar/facultades/turismo-y-hospitalidad/licenciatura-en-turismo/",
        description:"Turismo y hospitalidad"
      }
    ]
  },
  {
    imageUrl:
      "/assets/Universidades/udemm.png",
    imageAlt: "Logo Universidad de la Marina Mercante ",
    url: "/becas/udemm",
    title: "udemm",
    description: "",
    carrers: [
      {
        name: "Abogacía",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Acompañante Terapéutico",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Asistente Psicopedagógico",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Contador Público",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Ingeniería Electromecánica",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Ingeniería Electrónica",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Ingeniería Industrial",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Ingeniería Mecánica",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Ingeniería en Sistemas",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Administración",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Administración de Recursos Humanos",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Administración de Sistemas",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Administración Naviera",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Ciencias de la Comunicación y Escritura Creativa",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Comercio Internacional",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Economía",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Gestión Ambiental",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Gestión del Transporte Ferroviario",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Higiene y Seguridad en el Trabajo",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Marketing",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Producción de Bioimágenes",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Psicología",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Psicopedagogía",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Relaciones Públicas",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Seguros",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Transportes y Logística Operativa",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Lic. en Turismo",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Martillero Público, Corredor y Administrador de Consorcios",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Tecnicatura en Radiología",
        url: "https://www.udemm.edu.ar/",
        description:""
      },
      {
        name: "Tecnicatura Universitaria en Higiene y Seguridad",
        url: "https://www.udemm.edu.ar/",
        description:""
      }
  ]

  },
  {
    imageUrl:
      "/assets/Universidades/EAN.png",
    imageAlt: "Logo Escuela Argentina de Negocios ",
    url: "/becas/ean",
    title: "ean",
    description: "",
    carrers: [
      {
      name: "Contador Público",
      url: "https://www.ean.edu.ar/",
      description:""
    },
    {
      name: "Licenciatura en Administración de Empresas",
      url: "https://www.ean.edu.ar/",
      description:""
    },
    {
      name: "Licenciatura en Administración de Negocios Internacionales",
      url: "https://www.ean.edu.ar/",
      description:""
    },
    {
      name: "Licenciatura en Administración de Negocios en Internet",
      url: "https://www.ean.edu.ar/",
      description:""
    },
    {
      name: "Licenciatura en Administración Hotelera",
      url: "https://www.ean.edu.ar/",
      description:""
    },
    {
      name: "Licenciatura en Comercialización",
      url: "https://www.ean.edu.ar/",
      description:""
    },
    {
      name: "Licenciatura en Dirección del Factor Humano",
      url: "https://www.ean.edu.ar/",
      description:""
    },
    {
      name: "Licenciatura en Tecnología Informática",
      url: "https://www.ean.edu.ar/",
      description:""
    }
  ]

  },
  {
    imageUrl:
      "/assets/Universidades/umai.png",
    imageAlt: "Logo Universidad Maimonides ",
    url: "/becas/umai",
    title: "umai",
    description: "",
    carrers: [
      {
      name: "Bioquimica",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Ciencias de la salud"
    },
    {
      name: "Ciencias Biológicas",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Ciencias de la salud"
    },
    {
      name: "Enfermería",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Ciencias de la salud"
    },
    {
      name: "Farmacia",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Ciencias de la salud"
    },
    {
      name: "Instrumentación Quirúrgica - Ciclo (A Distancia)",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Ciencias de la salud"
    },
    {
      name: "Kinesiología y Fisiatría",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Ciencias de la salud"
    },
    {
      name: "Medicina",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Ciencias de la salud"
    },
    {
      name: "Nutrición",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Ciencias de la salud"
    },
    {
      name: "Odontología",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Ciencias de la salud"
    },
    {
      name: "Produccion de Bioimágenes",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Ciencias de la salud"
    },
    {
      name: "Produccion de Bioimágenes - Ciclo",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Ciencias de la salud"
    },
    {
      name: "Abogacía",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Humanidades, ciencias sociales y empresariales"
    },
    {
      name: "Actividad Fisica y Deporte - Ciclo (A Distancia)",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Humanidades, ciencias sociales y empresariales"
    },
    {
      name: "Ciencia Política (A Distancia)",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Humanidades, ciencias sociales y empresariales"
    },
    {
      name: "Educacion Física y Deporte",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Humanidades, ciencias sociales y empresariales"
    },
    {
      name: "Gerontología (A Distancia)",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Humanidades, ciencias sociales y empresariales"
    },
    {
      name: "Gestión de Organizaciones de Salud - Ciclo (A Distancia)",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Humanidades, ciencias sociales y empresariales"
    },
    {
      name: "Historia (A Distancia)",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Humanidades, ciencias sociales y empresariales"
    },
    {
      name: "Musicoterapia",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Humanidades, ciencias sociales y empresariales"
    },
    {
      name: "Periodismo (A Distancia)",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Humanidades, ciencias sociales y empresariales"
    },
    {
      name: "Profesorado Universitario",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Humanidades, ciencias sociales y empresariales"
    },
    {
      name: "Psicología",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Humanidades, ciencias sociales y empresariales"
    },
    {
      name: "Recursos Humanos",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Humanidades, ciencias sociales y empresariales"
    },
    {
      name: "Relaciones Internacionales (A Distancia)",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Humanidades, ciencias sociales y empresariales"
    },
    {
      name: "Turismo y Conservación del Patrimonio (A Distancia)",
      url: "https://www.maimonides.edu/",
      description:"Facultad de Humanidades, ciencias sociales y empresariales"
    },
    {
      name: "Tecnologia Multimedial",
      url: "https://www.maimonides.edu/",
      description:"Escuela de Comunicación y Diseño Multimedial"
    },
    {
      name: "Tecnologia de Videojuegos y Diseño Interactivo",
      url: "https://www.maimonides.edu/",
      description:"Escuela de Comunicación y Diseño Multimedial"
    },
  ]
  }
];

export default universities;