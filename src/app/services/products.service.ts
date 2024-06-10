import { Injectable } from '@angular/core';
import { ProductCard } from '../Models/productCard';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public Products: ProductCard[]=[
    new ProductCard(
      "assets/product.jpg",
      "Tailored Stretch",
      "Turn It Up Pants",
      "$180",
      ["#0C0C0C", "#7DC3EB", "#748C70"]
    ),
    new ProductCard(
      "assets/product1.jpg",
      "Technical Silk",
      "Make A Splash",
      "$120",
      ["#909225", "#19418E", "#0C0C0C"]
    ),
    new ProductCard(
      "assets/product2.jpg",
      "Cool Weave",
      "Anywhere Dress",
      "$210",
      ["#D0A5EA", "#909225", "#748C70"]
    )
  ];

  constructor() { }

  get ProductsList(): ProductCard[]{
    return this.Products;
  }

}
