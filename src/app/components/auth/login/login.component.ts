import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: LoginService) {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Usuario:', this.loginForm.value.username);
    console.log('Contraseña:', this.loginForm.value.password);
  }

  // ngOnInit() {
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  // }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     const {username, password} = this.loginForm.value;
  //     this.authService.login(username, password).subscribe(
  //         response => {
  //           // Aquí puedes manejar la respuesta de la API
  //           console.log(response);
  //         },
  //         error => {
  //           // Aquí puedes manejar los errores
  //           console.error(error);
  //         }
  //     );
  //   }
  // }
}
