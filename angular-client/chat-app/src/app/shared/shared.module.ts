import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
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
  exports: [ToastrModule, ReactiveFormsModule, OktaAuthModule]
})
export class SharedModule { }
