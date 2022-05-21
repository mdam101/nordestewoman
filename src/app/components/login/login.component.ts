import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/models/usuario/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

const ROLE = '';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  roles!: any;
  userRoles: typeof UserRole = UserRole;

  createForm() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm();
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getRole();
    }
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
  }

  onSubmit() {
    this.authService.login(this.form.value).subscribe(
        data => {
          this.tokenStorage.saveUser(data);
          this.tokenStorage.saveToken(this.tokenStorage.getUser().token);
          this.roles = this.tokenStorage.getRole();
          console.log(this.roles);
          if(this.roles.includes(this.userRoles.ADMIN)) {
            this.goToAdmin();
            this.snackbar.open("Has iniciado sesión como ADMIN", 'Undo', {duration: 3000});
          } else {
            this.goToHome();
            this.snackbar.open("Has iniciado sesión", 'Undo', {duration: 1500});
          }
          console.log(data);
        },
        error => {
          console.log(error)
          this.snackbar.open("Ha habido un error", 'Undo', {duration: 1500});
        }
    );
  }
}
