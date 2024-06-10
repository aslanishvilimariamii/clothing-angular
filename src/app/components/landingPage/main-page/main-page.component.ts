import { Component } from '@angular/core';
import { ProductsListComponent } from '../products-list/products-list.component';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { HeroComponent } from '../hero/hero.component';
import { CollectionComponent } from '../collection/collection.component';
import { ModiweekComponent } from '../modiweek/modiweek.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ProductsListComponent, HeaderComponent, FooterComponent, HeroComponent, CollectionComponent, ModiweekComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
