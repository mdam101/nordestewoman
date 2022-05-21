import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Ropadto } from 'src/app/models/ropa/ropadto';
import { RopaService } from 'src/app/services/ropa.service';

@Component({
  selector: 'app-add-ropa',
  templateUrl: './add-ropa.component.html',
  styleUrls: ['./add-ropa.component.css']
})
export class AddRopaComponent implements OnInit {

  form!: FormGroup;
  urlImage: any;

  constructor(public ropaService: RopaService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      nombreCategoria: new FormControl('', Validators.required),
      imagen: new FormControl('', Validators.required)
    });
  }

  goToHome() {
    this.router.navigate(['/ropa']);
  }

  onSubmit() {
    let ropadto = new Ropadto();
    ropadto.nombre = this.form.get('nombre')?.value;
    ropadto.descripcion = this.form.get('descripcion')?.value;
    ropadto.precio = this.form.get('precio')?.value;
    ropadto.nombreCategoria = this.form.get('nombreCategoria')?.value;
    let formData = new FormData();
    formData.append('ropa', JSON.stringify(ropadto));
    formData.append('file', this.form.get('imagen')?.value);

    this.ropaService.addRopa(formData).subscribe(data => {
      console.log(data);
      this.goToHome();
      this.snackbar.open("Prenda añadida con éxito", 'Undo', {duration: 1500});
    },
    error => {
      console.log(error);
      this.snackbar.open("Ha habido un error", 'Undo', {duration: 1500});
    });
  }

  onImgSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.form.patchValue({
      imagen: file,
    });
      this.form.get('imagen')!.updateValueAndValidity();
  }
}
