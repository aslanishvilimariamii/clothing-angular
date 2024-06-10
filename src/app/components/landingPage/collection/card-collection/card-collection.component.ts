import { Component } from '@angular/core';
import { CardCollection2Component } from './card-collection-2/card-collection-2.component';

@Component({
  selector: 'app-card-collection',
  standalone: true,
  imports: [CardCollection2Component],
  templateUrl: './card-collection.component.html',
  styleUrl: './card-collection.component.css'
})
export class CardCollectionComponent {

}
