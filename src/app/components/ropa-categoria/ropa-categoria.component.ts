import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Ropa } from 'src/app/models/ropa/ropa';
import { RopaService } from 'src/app/services/ropa.service';

@Component({
  selector: 'app-ropa-categoria',
  templateUrl: './ropa-categoria.component.html',
  styleUrls: ['./ropa-categoria.component.css']
})
export class RopaCategoriaComponent implements OnInit {

  nombreCategoria!: String;
  ropas: Ropa[] = [];

  constructor(private ropaService: RopaService, private route: ActivatedRoute, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.nombreCategoria = this.route.snapshot.params['nombreCategoria'];
    this.ropaService.getRopaByNombreCategoria(this.nombreCategoria).subscribe((data: Ropa[]) => {
      this.ropas = data;
      console.log(this.ropas);
    });
  }

  deleteRopa(id: String) {
    this.ropaService.deleteRopa(id).subscribe();
    this.snackbar.open("Prenda eliminada con éxito", 'Undo', {duration: 1500});
  }
}
