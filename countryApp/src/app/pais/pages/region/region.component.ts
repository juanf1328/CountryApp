import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private PaisService:PaisService) { }

  // getClaseCSS(region:string):string{
  //   return (region === this.regionActiva)
  //   ?'btn btn-primary'
  //   :'btn btn-outline-primary';
  // }


  activarRegion(region: string){

    if(region === this.regionActiva){return;}

    this.regionActiva = region;
    this.paises = [];

    this.PaisService.buscarRegion(region)
    .subscribe(paises => this.paises = paises);
  }


  ngOnInit(): void {
  }

}
