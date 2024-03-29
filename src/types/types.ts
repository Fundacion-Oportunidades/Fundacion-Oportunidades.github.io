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
}