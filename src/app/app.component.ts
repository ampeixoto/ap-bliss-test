import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app';

  isConnected = true;

  constructor() {
  }

  ngOnInit(): void {
    this.checkConnection();
  }

  checkConnection(): void {
    this.isConnected = navigator.onLine;
    setTimeout(() => this.checkConnection(), 1000);
  }
}
