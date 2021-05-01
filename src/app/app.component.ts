import { Component } from '@angular/core';
import { SpinnerService } from './services/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-poc';
  loading: boolean = false;

  constructor(private spinnerService: SpinnerService) {
    // change isLoading status whenever notified
    spinnerService.onLoadingChanged.subscribe((isLoading: any) => this.loading = isLoading);
  }
}
