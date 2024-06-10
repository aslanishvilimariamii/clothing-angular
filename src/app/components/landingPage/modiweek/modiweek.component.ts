import { Component } from '@angular/core';
import { ModiweekCardComponent } from './modiweek-card/modiweek-card.component';

@Component({
  selector: 'app-modiweek',
  standalone: true,
  imports: [ModiweekCardComponent],
  templateUrl: './modiweek.component.html',
  styleUrl: './modiweek.component.css'
})
export class ModiweekComponent {

}
