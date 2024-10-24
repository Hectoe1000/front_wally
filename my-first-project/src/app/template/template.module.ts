import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageNavbarComponent } from './page-navbar/page-navbar.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    PageFooterComponent,
    PageNavbarComponent
  ],
  exports:[
    PageNavbarComponent,
    PageFooterComponent
  ],
})
export class TemplateModule { }
