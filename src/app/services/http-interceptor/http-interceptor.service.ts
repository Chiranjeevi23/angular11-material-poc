import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from '../spinner/spinner.service';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("interceptor called");

    // emit onStarted event before request execution
    this.spinnerService.onStarted(req);

    return next.handle(req).
        pipe(finalize(() => {
          // emit onFinished event after request execution
          this.spinnerService.onFinished(req);
        }
      ));
  }


}
