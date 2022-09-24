import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { Articulo } from 'src/app/models/articulo';
import { Categoria } from 'src/app/models/categoria';
import { ArticuloService } from 'src/app/services/articulo.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-articulo-modificacion',
  templateUrl: './articulo-modificacion.component.html',
  styleUrls: ['./articulo-modificacion.component.css'],
})
export class ArticuloModificacionComponent implements OnInit {
  @Input() articulo: Articulo;

  categorias: Categoria[];

  private subscription = new Subscription();

  constructor(
    private categoriaService: CategoriaService,
    private articuloService: ArticuloService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.categoriaService.obtener().subscribe({
        next: (respuesta: Categoria[]) => {
          this.categorias = respuesta;
          this.cargarArticulo();
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
      this.articuloService.modificar(this.articulo).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: () => {
          alert('error al intentar guardar el articulo');
        },
      })
    );
  }

  cancelar() {
    this.router.navigate(['']);
  }

  private cargarArticulo() {
    this.subscription.add(
      this.activatedRoute.params.subscribe({
        next: (params) => {
          const id = params['id'];
          this.articuloService.obtenerPorId(id).subscribe({
            next: (respuesta: Articulo) => {
              this.articulo = respuesta;
            },
            error: () => {
              alert('error al obtener el articulo');
            },
          });
        },
      })
    );
  }
}
