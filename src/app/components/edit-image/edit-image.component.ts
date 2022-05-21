import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RopaService } from 'src/app/services/ropa.service';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {

  form!: FormGroup;
  urlImage: any;

  constructor(public ropaService: RopaService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      imagen: new FormControl('', Validators.required)
    });
  }

  goToHome() {
    this.router.navigate(['/ropa']);
  }

  onSubmit() {
    let formData = new FormData();
    formData.append('file', this.form.get('imagen')?.value);

    this.ropaService.addRopa(formData).subscribe(data => {
      console.log(data);
      this.goToHome();
      this.snackbar.open("Imagen editada con éxito", 'Undo', {duration: 1500});
    },
    error =>  {
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
