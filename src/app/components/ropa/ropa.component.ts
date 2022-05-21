import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Ropa } from 'src/app/models/ropa/ropa';
import { UserRole } from 'src/app/models/usuario/usuario';
import { RopaService } from 'src/app/services/ropa.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent implements OnInit {
  ropas: Ropa[] = [];
  botonVisible = false;
  roles: typeof UserRole = UserRole;

  constructor(private ropaService: RopaService, private tokenStorage: TokenStorageService, private router: Router, private snackbar: MatSnackBar) { 
    
  }

  ngOnInit(): void {
    this.getRopas();

    if(this.tokenStorage.getRole()?.includes(this.roles.ADMIN)) {
      this.botonVisible = true;
    } else {
      this.botonVisible = false;
    }
  }

  getRopas() {
    this.ropaService.getRopas()
    .subscribe(
      ropaData => this.ropas = ropaData
    );
  }

  deleteRopa(id: String) {
    this.ropaService.deleteRopa(id).subscribe();
    this.router.navigate(['/ropa']);
    this.snackbar.open("Prenda eliminada con éxito", 'Undo', {duration: 1500});
  }
}
