import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias() {
    this.categoriaService.getCategorias()
    .subscribe(
      categoriaData => this.categorias = categoriaData
    );
  }
}
