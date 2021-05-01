import { HttpRequest } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() {
    // console.log("--spinner service invoked--");
  }

  onLoadingChanged: EventEmitter<boolean> = new EventEmitter<boolean>(false);

   /**
   * Stores all currently active requests
   */
  private requests: HttpRequest<any>[] = [];

  /**
   * Adds request to the storage and notifies observers
   */
   onStarted(req: HttpRequest<any>): void {
    //  console.log("--onStarted method called--");

    this.requests.push(req);
    this.notify();
  }

  /**
   * Removes request from the storage and notifies observers
   */
   onFinished(req: HttpRequest<any>): void {
    // console.log("-- before splice this.requests--", this.requests);
    const index = this.requests.indexOf(req);
    if (index !== -1) {
      this.requests.splice(index, 1);
    }
    // console.log("-- after this.requests--", this.requests);
    this.notify();
  }


  /**
   * Notifies observers about whether there are any requests on fly
   */
  notify(){
    this.onLoadingChanged.emit(this.requests.length !== 0);
  }

}
