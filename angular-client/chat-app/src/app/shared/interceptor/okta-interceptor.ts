import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class OktaInterceptor implements HttpInterceptor {

    constructor() {

    }

    /**
     * Was supposed to handle interaction with Okta but not requied anymore
     * @param request 
     * @param next 
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request);
    }

}
