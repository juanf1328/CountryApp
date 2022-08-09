import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OnlyPaisComponent } from './pais/pages/only-pais/only-pais.component';
import { RegionComponent } from './pais/pages/region/region.component';
import { CapitalComponent } from './pais/pages/capital/capital.component';
import { PaisesComponent } from './pais/pages/paises/paises.component';


const routes: Routes = [
    {
        path:'',
        component: OnlyPaisComponent,
        pathMatch:'full'
    },
    {
        path:'region',
        component: RegionComponent
    },
    {
        path:'capital',
        component: CapitalComponent
    },
    {
        path:'pais/:id',
        component: PaisesComponent
    },
    {
        path:'**',
        redirectTo:''
    }
];


@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})


export class approutingmodule {}