import { AppRoutingModule } from './../app-routing.module';
import { Article } from './article';

export class Cart {
  id?: string;
  quantity: number = 0;
  total: number = 0;
  articles: Array<Article> = [];
  created_at?: Date;

}
