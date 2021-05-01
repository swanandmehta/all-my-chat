import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";
import { OktaAuthService } from "@okta/okta-angular";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private oktaAuthService: OktaAuthService) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken: String | undefined = this.oktaAuthService.getAccessToken();

        request = request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + accessToken
            }
        })

        return next.handle(request);
    }

}
