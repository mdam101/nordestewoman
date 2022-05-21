import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent implements OnInit {

  form!: FormGroup;

  constructor(public categoriaService: CategoriaService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required)
    });
  }

  goToAdmin() {
    this.router.navigate(['/admin']);
  }

  onSubmit() {
    this.categoriaService.addCategoria(this.form.value)
    .subscribe(
      data => {
        console.log(data);
        this.goToAdmin();
        this.snackbar.open("Categoría añadida con éxito", 'Undo', {duration: 1500});
      },
      error => {
        console.log(error);
        this.goToAdmin();
        this.snackbar.open("Ha habido un error", 'Undo', {duration: 1500});
      });
  }
}
