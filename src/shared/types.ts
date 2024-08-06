export enum SelectedPage {
  HOME = "home",
  BENEFITS = "benefits",
  OUR_CLASSES = "our-classes",
  CONTACT_US = "contact-us",
}
export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
