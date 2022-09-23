import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  urlBase = "https://jsonplaceholder.typicode.com";
  listaPost: PostModel[] = [];
  post: PostModel;

  constructor(private http: HttpClient) { }

  getPosts() : Observable<PostModel[]>{
    let direccion = this.urlBase + '/posts';
    return this.http.get<PostModel[]>(direccion);
  }

  altaPost(post: PostModel){
    let direccion = this.urlBase + '/posts';
    return this.http.post(direccion,post); 
  }
}
