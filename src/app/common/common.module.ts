import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { ClientInfoModule } from "../clientinfo/clientinfo.module";

@NgModule({
  declarations: [ 
    HeaderComponent, 
    FooterComponent, 
    SideNavComponent, 
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ClientInfoModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ClientInfoModule
  ]
})
export class CommonComponentModule { }
