import { Category } from './category';

export interface Product {
  id?: string;
  name: string;
  imageUrl: string[];
  category:string;
  size: string[];
  price: number;
  description: string;
  currency: "EUR";
  slug?: string;
}
