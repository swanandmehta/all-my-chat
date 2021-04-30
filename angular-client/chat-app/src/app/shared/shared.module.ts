import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { environment } from 'src/environments/environment';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      'closeButton': false,
      'tapToDismiss': true
    }),
    ReactiveFormsModule,
    ClarityModule
  ],
  providers: [
    {
      provide: OKTA_CONFIG,
      useValue: {
        issuer: environment.auth.okta.issuer,
        clientId: environment.auth.okta.clientId,
        redirectUri: environment.auth.okta.redirectUri
      }
    }
  ],
  exports: [ToastrModule, ReactiveFormsModule, OktaAuthModule, ClarityModule]
})
export class SharedModule { }
