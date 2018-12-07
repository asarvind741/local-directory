import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpEvent,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Injectable()


export class TokenIterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthenticationService,
        private router: Router
    ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('token');
        console.log("token==========>", token)
        const apiReq = req.clone({
            headers: req.headers.set('x-access-token', `${token}`)
        })

        return next.handle(apiReq)
            .map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    return event;
                }
            })
            .catch((error: any) => {

                if (error instanceof HttpErrorResponse) {

                    if (error.status === 401) {

                        console.log('Unauthorized');
                        this.authService.refreshToken(localStorage.getItem('currentUser'))
                        .subscribe((response: HttpResponse<any>) => {
                            this.authService.saveUser(response['data']);
                            let token = localStorage.getItem('token');
                            console.log("token==========>", token)
                            const apiReq = req.clone({
                                headers: req.headers.set('x-access-token', `${token}`)
                            })
                            return next.handle(apiReq);
                        })


                    } else if (error.status === 403) { //log back in!!

                        this.router.navigate(['/login']);

                    }

                } else {

                    return Observable.throw(error);

                }

            });

    }
}