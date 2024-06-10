import { Component } from '@angular/core';
import { CardCollectionComponent } from './card-collection/card-collection.component';
import { CardCollection2Component } from './card-collection/card-collection-2/card-collection-2.component';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CardCollectionComponent, CardCollection2Component],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {

}
