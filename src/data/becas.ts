import type { Becas } from "../types/types";

const becas: Becas[] = [
    {
        name: "Beca María Laura García",
        link: "maria-laura-garcia",
        imgUrl: "",
        req: [
            {
                title: "",
                text: "Ser mujer"
            },
            {
                title:"Estudiar alguna de las siguientes carreras ",
                text: [
                    {title: "", text: "Ingeniería en Sistemas Informáticos (UAI)"},
                    {title: "", text: "Analista Programador (UAI)"},
                    {title: "", text: "Lic. en Administración de Sistemas (UdeMM)"},
                    {title: "", text: "Lic. en Gestión de Tecnología Informática (UAI)"},
                    {title: "", text: "Ingeniería en Sistemas (UdeMM)"},
                    {title: "", text: "Lic. en Ciencias de la Comunicación y Escritura Creativa (UdeMM)"},
                    {title: "", text: "Lic. en Administración de Negocios en Internet (EAN)"},
                    {title: "", text: "Lic. en Tecnología Informática (EAN)"},

                ]
            },
            {
                title: "",
                text: "Estar interesada en vincular la comunicación y la tecnología, y desarrollar tu carrera en este sector."
            },
            {
                text: "",
                title: "Ser oriunda de Argentina"
            }
        ],
        benefits: [
            {
                title: "",
                text: "Cuotas universitarias cubiertas al 100%"
            },
            {
                title: "",
                text: "Estipendio económico mensual"
            },
            {
                title: "",
                text: "Mentoreo de acompañamiento de Maria Laura García, 1 vez por mes"
            },
        ],
        other: [
            {
                title: "",
                text: "Promedio igual o mayor a 7 en el colegio"
            },
            {
                title: "",
                text: "No haber tenido sanciones disciplinarias en el colegio"
            },
            {
                title: "",
                text: "2 cartas de recomendación: preferentemente, de un profesor/a y de una autoridad del colegio"
            },
            {
                title: "",
                text: "1 carta de motivación"
            }
        ]
    }
]


export default becas;