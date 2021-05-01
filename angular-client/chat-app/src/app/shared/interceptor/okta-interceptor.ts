import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class OktaInterceptor implements HttpInterceptor {

    constructor() {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if(request.url.includes("dev-67343191")){
            request = request.clone({
                setHeaders: {
                    Authorization: 'SSWS 00_2H8Y8d2k2ehmdFXNuLKQW8bPg-UHTaLqqx4rWvb'
                }
            })
    
        }

        return next.handle(request);
    }

}
