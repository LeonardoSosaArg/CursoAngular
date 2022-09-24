import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/models/articulo';

import { Categoria } from 'src/app/models/categoria';
import { ArticuloService } from 'src/app/services/articulo.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-articulo-alta',
  templateUrl: './articulo-alta.component.html',
  styleUrls: ['./articulo-alta.component.css'],
})
export class ArticuloAltaComponent implements OnInit, OnDestroy {
  categorias: Categoria[];
  articulo: Articulo;

  private subscription = new Subscription();

  constructor(
    private categoriaService: CategoriaService,
    private articuloService: ArticuloService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.articulo = { categoria: {} } as Articulo;
    this.subscription.add(
      this.categoriaService.obtener().subscribe({
        next: (respuesta: Categoria[]) => {
          this.categorias = respuesta;
        },
        error: () => {
          alert('error al obtener las categorias');
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  guardar() {
    this.subscription.add(
      this.articuloService.agregar(this.articulo).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: () => {
          alert('error al guardar el articulo');
        }
      })
    );
  }

  cancelar() {
    this.router.navigate(['']);
  }
}
