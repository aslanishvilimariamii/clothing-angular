import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RegisterUser } from '../../../Models/registerModel';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  RegisterForm = this.fb.group({
    FirstName: ["", Validators.required],
    LastName: ["", Validators.required],
    Email: ["", [Validators.required, Validators.email]],
    Password: ["", [Validators.required, Validators.minLength(8)]]

  });

  constructor(private fb: FormBuilder, public UsersService: UsersService){}

  onSubmit(): void{
    console.log(this.RegisterForm.value);
    if(this.RegisterForm.valid){
      const{FirstName, LastName, Email, Password} = this.RegisterForm.value;
      const registerData = new RegisterUser(
        FirstName as string,
        LastName as string,
        Email as string, 
        Password as string
      );
      console.log(registerData);
      this.UsersService.addUser(registerData);
    }
  }

}
