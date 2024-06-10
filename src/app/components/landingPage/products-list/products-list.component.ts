import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { NgFor } from '@angular/common';
import { NgStyle } from '@angular/common';
import { ProductCard } from '../../../Models/productCard';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  constructor(public FavoritesService: FavoritesService, public ProductsService: ProductsService){}

  addToFavorites(fav: ProductCard){
    this.FavoritesService.addfav(fav);
}}
