import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( images: any[] ): string {
  
    //SI EL ARREGLO DE IMAGENES ESTA VACIO
    if (!images) {
      //EL PAD RELATIVO EMPIEZA EN EL INDEX (LA DIRECCION DE LA IMAGEN)
      return 'assets/img/noimage.png';
    }
    
    //SI EL TAMAÑO DEL ARRRAY DE IMAGENES ES MAYOR A 0
    if (images.length > 0) {
      return images[0].url;
    }
    else
    {
      return 'assets/img/noimage.png';
    }
  }

}
