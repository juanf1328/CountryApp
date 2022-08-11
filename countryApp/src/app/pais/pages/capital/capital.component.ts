import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private PaisService: PaisService) { }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;

    this.PaisService.buscarCapital(termino)
    .subscribe( (paises) => {
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  ngOnInit(): void {
  }

}
