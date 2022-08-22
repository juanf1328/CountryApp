import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
 // regionActiva: string[] = '';

  constructor() { }

  activarRegion(region: string){
    //this.regionActiva = region;
  }


  ngOnInit(): void {
  }

}
