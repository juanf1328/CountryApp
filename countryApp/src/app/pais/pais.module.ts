import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { RegionComponent } from './pages/region/region.component';
import { OnlyPaisComponent } from './pages/only-pais/only-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [
    CapitalComponent,
    PaisesComponent,
    RegionComponent,
    OnlyPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  exports:[
    CapitalComponent,
    PaisesComponent,
    RegionComponent,
    OnlyPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
