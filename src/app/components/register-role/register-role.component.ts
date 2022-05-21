import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-role',
  templateUrl: './register-role.component.html',
  styleUrls: ['./register-role.component.css']
})
export class RegisterRoleComponent implements OnInit {

  form!: FormGroup;

  createForm() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rol: new FormControl('', Validators.required)
    });
  }

  constructor(private authService: AuthService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm();
  }

  goToLogin() {
    this.router.navigate(['/admin']);
  }

  onSubmit(): void {
    this.authService.registerrole(this.form.value).subscribe(
      data => {
        console.log(data);
        this.goToLogin();
        this.snackbar.open("Usuario ADMIN registrado", 'Undo', {duration: 1500});
      },
      error => {
        console.log(error);
        this.snackbar.open("Ha habido un error", 'Undo', {duration: 1500});
      }
    );
  }

}
