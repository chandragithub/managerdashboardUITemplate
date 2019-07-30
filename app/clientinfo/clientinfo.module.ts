import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientInformationComponent } from './client-information/client-information.component';
import { IpAddressWhitelistedComponent } from './ip-address-whitelisted/ip-address-whitelisted.component';
import { ConnectionDetailsComponent } from './connection-details/connection-details.component';

@NgModule({
  declarations: [ClientInformationComponent, IpAddressWhitelistedComponent, ConnectionDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ClientInformationComponent,
    IpAddressWhitelistedComponent,
    ConnectionDetailsComponent
  ]
})
export class ClientInfoModule { }
