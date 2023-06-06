export interface MenuItem {
  title: string;
  options: {
    title: string;
    url: string;
  }[];
}

export interface FAQ {
  question: string;
  answer: string;
}
