import { Routes } from '@angular/router';
import { PagPrincipalComponent } from './page-dinamic/pag-principal/pag-principal.component';


export const routes: Routes = [

   {
    path:"",component:PagPrincipalComponent
   },
   {
    path:"",
    loadChildren:()=>import("./page-static/page-static.module").then(m=>m.PageStaticModule)
   }

];
