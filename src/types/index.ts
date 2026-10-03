export type ProjectCategory = "Residencial" | "Comercial" | "Interiores";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  location: string;
  image: string;
  alt: string;
  description: string;
  /** Controla o destaque no grid assimétrico */
  span?: "large" | "tall" | "standard";
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export interface Material {
  id: string;
  name: string;
  image: string;
  alt: string;
}

export type ProjectFilter = "Todos" | ProjectCategory;

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: "Arquitetura" | "Interiores" | "Reforma" | "Consultoria" | "";
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
}
