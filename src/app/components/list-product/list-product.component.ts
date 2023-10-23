import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      {
        id : 1,
        name: " T-SHIRT GRAPHIQUE UT JUJUTSU KAISEN SEASON 2 ",
        imageUrl: "/src/assets/images/t-shirt-jjsu2.webp",
        category: ["t-shirt" , "sweat" , "accessories"],
        sizes: ["S", "M", "L", "XL"],
        price: 1990
      },
      {
        id : 2,
        name: " T-SHIRT GRAPHIQUE UT JUJUTSU KAISEN SEASON 2 ",
        imageUrl: "/src/assets/images/t-shirt-jj3.webp",
        category: ["t-shirt" , "sweat" , "accessories"],
        sizes: ["S", "M", "L", "XL"],
        price: 1990
      },
      {
        id : 3,
        name: " T-SHIRT GRAPHIQUE UT JUJUTSU KAISEN SEASON 2 ",
        imageUrl: "/src/assets/images/t-shirt-jj4.webp",
        category: ["t-shirt" , "sweat" , "accessories"],
        sizes: ["S", "M", "L", "XL"],
        price: 1990
      },
      {
        id : 4,
        name: "T-SHIRT GRAPHIQUE UT L'ATTAQUE DES TITANS ",
        imageUrl: "/src/assets/images/t-shirt-attackT.webp",
        category: ["t-shirt" , "sweat" , "accessories"],
        sizes: ["S", "M", "L", "XL"],
        price: 1990
      },
      {
        id : 5,
        name: " T-SHIRT GRAPHIQUE UT L'ATTAQUE DES TITANS ",
        imageUrl: "/src/assets/images/t-shirt-attackT2.webp",
        category: ["t-shirt" , "sweat" , "accessories"],
        sizes: ["S", "M", "L", "XL"],
        price: 1990
      },
      {
        id : 6,
        name: " T-SHIRT GRAPHIQUE UT MY HERO ACADEMIA ",
        imageUrl: "/src/assets/images/t-shirt-my-Hero-Ac.webp",
        category: ["t-shirt" , "sweat" , "accessories"],
        sizes: ["S", "M", "L", "XL"],
        price: 1990
      },
      {
        id : 7,
        name: " T-SHIRT GRAPHIQUE UT MY HERO ACADEMIA ",
        imageUrl: "/src/assets/images/t-shirt-my-hero2.webp",
        category: ["t-shirt" , "sweat" , "accessories"],
        sizes: ["S", "M", "L", "XL"],
        price: 1990
      },
      {
        id : 8,
        name: " T-SHIRT GRAPHIQUE UT THE SAKE COLLECTION ",
        imageUrl: "/src/assets/images/t-shirt-sake.webp",
        category: ["t-shirt" , "sweat" , "accessories"],
        sizes: ["S", "M", "L", "XL"],
        price: 1990
      },
      {
        id : 9,
        name: " SWEAT DRAGON BALL Z KANJI KAME ",
        imageUrl: "/src/assets/images/sweat-black-goku-rose.webp",
        category: ["t-shirt" , "sweat" , "accessories"],
        sizes: ["S", "M", "L", "XL"],
        price: 5990
      },
      {
        id : 10,
        name: " SWEAT DRAGON BALL ECOLE DE LA TORTUE ",
        imageUrl: "/src/assets/images/sweat-capuche-sangoku-logo.webp",
        category: ["t-shirt" , "sweat" , "accessories"],
        sizes: ["S", "M", "L", "XL"],
        price: 5990
      },
      {
        id : 11,
        name: " SWEAT DRAGON BALL Z VEGETA ADIDAS ",
        imageUrl: "/src/assets/images/sweat-dbz.webp",
        category: ["t-shirt" , "sweat" , "accessories"],
        sizes: ["S", "M", "L", "XL"],
        price: 5990
      },
      {
        id : 12,
        name: "SWEAT DRAGON BALL Z NIKE JUST DO IT ",
        imageUrl: "/src/assets/images/sweat-dbz2.webp",
        category: ["t-shirt" , "sweat" , "accessories"],
        sizes: ["S", "M", "L", "XL"],
        price: 6990
      },
      {
        id : 13,
        name: "SWEAT DRAGON BALL Z GIKU BATON MAGIQUE ",
        imageUrl: "/src/assets/images/sweat-dragon-ball-z-orange.webp",
        category: ["t-shirt" , "sweat" , "accessories"],
        sizes: ["S", "M", "L", "XL"],
        price: 6990
      },
      {
        id : 14,
        name: "SWEAT DRAGON BALL Z TORTUE GENIALE ",
        imageUrl: "/src/assets/images/sweat-dsz3.webp",
        category: ["t-shirt" , "sweat" , "accessories"],
        sizes: ["S", "M", "L", "XL"],
        price: 6990
      },
      {
        id : 15,
        name: " SWEAT DRAGON BALL GOKU & CHICHI ",
        imageUrl: "/src/assets/images/sweat-goku-chichi.webp",
        category: ["t-shirt" , "sweat" , "accessories"],
        sizes: ["S", "M", "L", "XL"],
        price: 5990
      },
      {
        id : 16,
        name: " SWEAT DRAGON BALL Z GOKU BLACK APPARITION",
        imageUrl: "/src/assets/images/Sweat_jaune_dbz.webp",
        category: ["t-shirt" , "sweat" , "accessories"],
        sizes: ["S", "M", "L", "XL"],
        price: 6990
      },
    ]
    
  }


}
