import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private urlBase = 'https://abmfire-8f5c3-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }

  crearHeroe(heroe: HeroeModel){

    return this.http.post(this.urlBase + '/heroes.json', heroe )
    .pipe(
      map( (resp: any) => {
        heroe.id = resp.name
        return heroe;
      })
    );
  }

  actualizarHeroe(heroe: HeroeModel){

    const heroeTemp = {
      ...heroe
    };
    return this.http.put(this.urlBase + '/heroes/' + heroe.id +'.json', heroe);
  }

  getHeroes(){
    return this.http.get(this.urlBase + "/heroes.json")
    .pipe(
      map (this.crearArreglo)
    );
  }

  getHeroe(id: any): Observable<HeroeModel>{
    return this.http.get<HeroeModel>(this.urlBase + "/heroes/" + id + ".json");
  }

  borrarHeroe(id:any){
    return this.http.delete(this.urlBase + "/heroes/" + id + ".json");
  }

  private crearArreglo(heroesObj: any){

    const heroes : HeroeModel[] = [];

    Object.keys( heroesObj ).forEach( key => {
      const heroe : HeroeModel = heroesObj[key];
      heroe.id = key;
      heroes.push(heroe);
    });

    console.log(heroesObj)

    if (heroesObj === null) {
      return [];
    }
    return heroes;
  }

}
