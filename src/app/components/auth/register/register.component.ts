import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
    username: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
    birthdate: ['']
  });
}

ngOnInit(): void {
}
onSubmit(): void {
  console.log('Usuario:', this.registerForm.value.username);
  console.log('Email:', this.registerForm.value.email);
  console.log('Contraseña:', this.registerForm.value.password);
  console.log('Confirmación de contraseña:', this.registerForm.value.confirmPassword);
  console.log('Fecha de nacimiento:', this.registerForm.value.birthdate);
}
}
