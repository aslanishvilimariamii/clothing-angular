import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { FooterComponent } from '../../footer/footer.component';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent, RegisterFormComponent, FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
