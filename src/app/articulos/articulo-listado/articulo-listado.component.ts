import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { Articulo } from 'src/app/models/articulo';
import { Categoria } from 'src/app/models/categoria';
import { ArticuloService } from 'src/app/services/articulo.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-articulo-listado',
  templateUrl: './articulo-listado.component.html',
  styleUrls: ['./articulo-listado.component.css'],
})
export class ArticuloListadoComponent implements OnInit, OnDestroy {
  listado: Articulo[];

  private subscription = new Subscription();

  constructor(
    private articuloService: ArticuloService,
    private categoriaService: CategoriaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.actualizarListado();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  actualizarListado() {
    this.subscription.add(
      this.categoriaService.obtener().subscribe({
        next: (categorias: Categoria[]) => {
          this.articuloService.obtener().subscribe({
            next: (respuesta: Articulo[]) => {
              for (const articulo of respuesta) {
                const categoriaIndex = categorias.findIndex(
                  (x) => x.id === articulo.categoriaId
                );
                articulo.categoria = categorias[categoriaIndex];
              }

              this.listado = respuesta;
            },
            error: () => {
              alert('error al comunicarse con la API');
            },
          });
        },
      })
    );
  }

  nuevoArticulo() {
    this.router.navigate(['alta']);
  }

  actualizarArticulo(id: string) {
    this.router.navigate(['modificar', id]);
  }
}
