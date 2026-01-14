export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Technology {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Transformation {
  id: string;
  before: string;
  after: string;
}

export interface NavItem {
  label: string;
  href: string;
}