import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { RegionComponent } from './pages/region/region.component';
import { OnlyPaisComponent } from './pages/only-pais/only-pais.component';



@NgModule({
  declarations: [
    CapitalComponent,
    PaisesComponent,
    RegionComponent,
    OnlyPaisComponent
  ],
  exports:[
    CapitalComponent,
    PaisesComponent,
    RegionComponent,
    OnlyPaisComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaisModule { }
