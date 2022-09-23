import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { PostModel } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-post',
  templateUrl: './alta-post.component.html',
  styleUrls: ['./alta-post.component.css']
})
export class AltaPostComponent implements OnInit {

  post: PostModel = new PostModel();

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  mostrarAlerta() {
    Swal.fire(
      `${this.post.userId}`,
      'Se actualizo correctamente',
      'success',
    );

    Swal.showLoading();
  }

  guardar(form: NgForm) {

    if (form.invalid) {
      console.log('Formulario no válido')
      return;
    }

    Swal.fire(
      'Espere',
      'Guardando información',
      'info',
    );

    Swal.showLoading();

    let peticion: Observable<any>;

    peticion = this.postService.altaPost(this.post);
    console.log(this.post);
    peticion.subscribe(resp => {
      Swal.fire(
        `${this.post.userId}`,
        'Se actualizo correctamente',
        'success',
      );
    })
  }


  }
