import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Ropa } from 'src/app/models/ropa/ropa';
import { RopaService } from 'src/app/services/ropa.service';

@Component({
  selector: 'app-edit-ropa',
  templateUrl: './edit-ropa.component.html',
  styleUrls: ['./edit-ropa.component.css']
})
export class EditRopaComponent implements OnInit {

  id!: String;
  ropa!: Ropa;
  form!: FormGroup;

  constructor(public ropaService: RopaService, private route: ActivatedRoute, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ropaService.getIdRopa(this.id).subscribe((data: Ropa) => {
      this.ropa = data;
    });

    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      nombreCategoria: new FormControl('', Validators.required)
      
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.ropaService.editRopa(this.id, this.form.value).subscribe((res: any) => {
      this.snackbar.open("La prenda se ha editado con éxito", 'Undo', {duration: 1500});
      this.router.navigateByUrl('/ropa');
    });
  }

}
