import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { environment } from 'src/environments/environment';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth-interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      'closeButton': false,
      'tapToDismiss': true
    }),
    ReactiveFormsModule,
    ClarityModule,
    HttpClientModule
  ],
  exports: [ToastrModule, ReactiveFormsModule, OktaAuthModule, ClarityModule, HttpClientModule]
})
export class SharedModule {

  public static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: OKTA_CONFIG,
          useValue: {
            issuer: environment.auth.okta.issuer,
            clientId: environment.auth.okta.clientId,
            redirectUri: environment.auth.okta.redirectUri
          }
        },
        { 
          provide: HTTP_INTERCEPTORS, 
          useClass: AuthInterceptor, 
          multi: true 
        }
      ]
    };
  }
}
