import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria/categoria';
import { Usuario } from 'src/app/models/usuario/usuario';
import { CategoriaService } from 'src/app/services/categoria.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  categorias: Categoria[] = [];

  usuarios: Usuario[] = [];

  constructor(private categoriaService: CategoriaService, private usuarioService: UsuarioService, private tokenService: TokenStorageService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCategorias();
    this.getUsuarios();
  }

  getCategorias() {
    this.categoriaService.getCategorias()
    .subscribe(
      ropaData => this.categorias = ropaData
    );
  }

  deleteCategoria(id: String) {
    this.categoriaService.deleteCategoria(id).subscribe();
    this.router.navigate(['/admin']);
    this.snackbar.open("Categoría eliminada correctamente", 'Undo', {duration: 1500});
  }

  getUsuarios() {
    this.usuarioService.getUsuarios()
    .subscribe(
      usuarioData => this.usuarios = usuarioData
    );
  }

  logout() {
    this.tokenService.signOut();
    this.router.navigate(['/login']);
    this.snackbar.open("Has cerrado sesión", 'Undo', {duration: 1500});
  }
}
