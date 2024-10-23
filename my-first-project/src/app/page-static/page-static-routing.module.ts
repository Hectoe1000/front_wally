import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { LocalComponent } from './local/local.component';
import { InforWaaliComponent } from './infor-waali/infor-waali.component';

const routes: Routes = [

  {
    path:"ayuda",component:HelpComponent
  },
  {
    path:"local",component:LocalComponent
  },
  {
    path:"informacion",component:InforWaaliComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageStaticRoutingModule { }
