import type { Mission } from '../types/types';

const missionList: Mission[] = [
  {
    title: 'Misión',
    paragraphs: [
      'Creamos posibilidades, mediante becas estudiantiles, para mejorar el futuro de aquellas personas que, como estudiantes de colegio, tuvieron un desempeño destacable, pero que por su situación económica, no podrían afrontar el pago de estudios superiores en universidades privadas.',
      'Así, pretendemos transformarnos en el instrumento para potenciar el futuro de personas que, de otra manera, su destino sería muy distinto.',
    ],
    imageUrl:
      'public/assets/Recursos/PNG/hombre en contenedor.png',
    position: 
      '1',
  },
  {
    title: 'Visión',
    imageUrl: 'public/assets/Recursos/PNG/escalera diagonal.png',
    paragraphs: [
      'Pretendemos ser reconocida nacionalmente como la institución, por excelencia, dedicada a crear oportunidades para personas de bajos recursos.',
    ],
    position: '2',
  },
  {
    title: 'Objetivo',
    imageUrl: 'public/assets/Recursos/PNG/education-illustration.png',
    paragraphs: [
      'La Fundación Oportunidades, en base a los objetivos de ayudar al crecimiento personal y profesional de personas de bajos recursos, tiene como principal campo de acción el otorgamiento de becas de estudio y estipendios mensuales, a alumnos que cuentan con buen rendimiento académico.',
      'La idea de trabajo es muy simple: otorgar becas de estudio a personas de bajos recursos y con buen rendimiento académico, para que puedan estudiar en universidades privadas del país. Es decir, la idea es darle oportunidades a aquellas personas que, de otra manera, no las tendrían.'
    ],
    position: '3',
  },
];

export default missionList;
