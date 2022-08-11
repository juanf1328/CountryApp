import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-only-pais',
  templateUrl: './only-pais.component.html',
  styleUrls: ['./only-pais.component.css']
})
export class OnlyPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private PaisService: PaisService) { }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;

    this.PaisService.buscarPais(termino)
    .subscribe( (paises) => {
      console.log(paises);
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino:string){
    this,this.hayError = false;
  }

  ngOnInit(): void {
  }

}
