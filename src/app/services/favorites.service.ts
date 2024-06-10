import { Injectable } from '@angular/core';
import { ProductCard } from '../Models/productCard';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  public Favorites: ProductCard[]=[
    
  ]
  constructor() { }

  get FavoritesList(): ProductCard[]{
    return this.Favorites;
  }
  addfav(fav: ProductCard):void{
    this.Favorites.push(fav);
  }
}
