import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuariodto } from 'src/app/models/usuario/usuariodto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  createForm() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  constructor(private authService: AuthService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit(): void {
    this.authService.register(this.form.value).subscribe(
      data => {
        console.log(data);
        this.goToLogin();
        this.snackbar.open("Usuario registrado correctamente", 'Undo', {duration: 1500});
      },
      error => {
        console.log(error);
        this.snackbar.open("Ha habido un error", 'Undo', {duration: 1500});
      }
    );
  }
}
