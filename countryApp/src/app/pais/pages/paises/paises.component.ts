import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {


  pais!:Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private PaisService: PaisService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.PaisService.getPaisPorAlpha(id)),
      tap(console.log)
    )

    .subscribe(pais => this.pais = pais);
   }
}
