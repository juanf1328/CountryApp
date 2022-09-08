import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private PaisService:PaisService) { }

  // getClaseCSS(region:string):string{
  //   return (region === this.regionActiva)
  //   ?'btn btn-primary'
  //   :'btn btn-outline-primary';
  // }


  activarRegion(regionalbloc: string){
    if(regionalbloc === this.regionActiva){return;}

    this.regionActiva = regionalbloc;
    this.paises = [];
    this.PaisService.buscarRegion(regionalbloc)
    .subscribe (paises => this.paises = paises);
   
  }


  ngOnInit(): void {
  }

}
