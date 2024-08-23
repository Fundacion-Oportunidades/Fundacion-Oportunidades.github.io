export interface MenuItem {
  title: string;
  url: string;
  options: {
    title: string;
    url: string;
  }[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonials {
  imageUrl: string;
  imageAlt: string;
  text: string;
  signature: string;
}

export interface Companies {
  imageUrl: string;
  imageAlt: string;
  url: string;
}

export interface Universities {
  imageUrl: string;
  imageAlt: string;
  url: string;
  title: string;
  description:string;
  carrers: Carrers[];
}

export interface Carrers {
  name: string;
  url: string;
  description: string;
}

export interface SocialMediaTypes {
  imageUrlActive: string;
  imageUrlInactive: string;
  url: string;
  imageAlt: string;
}

export interface Mission {
  title: string;
  imageUrl: string;
  paragraphs: string[];
  position: string;
}

export interface TextCardItems {
  title: string;
  paragraphs: string[];
  urlImage: string;
}
export interface WorkerCard {
  name: string;
  imageUrl: string;
  rank: string;
}

export interface ImageList {
  name: string;
  imageUrl: string;
  link: string;
}

export interface Benefactor {
  name: string;
  imageUrl: string;
  pageUrl: string;
  description: BenefactorDescription[];
  link: string;
}

export interface BenefactorDescription {
  title: string;
  text: string;
}

export interface Becas {
  name: string;
  link: string;
  req: ListText[];
  benefits: ListText[];
  other: ListText[];
  imgUrl: string;
}

export interface ListText {
  title: string;
  text: string | ListText[];
}

