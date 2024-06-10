import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { NgFor } from '@angular/common';
import { FavoritesService } from '../../../services/favorites.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgFor, NgStyle],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  constructor(public FavoritesService: FavoritesService){}
}
