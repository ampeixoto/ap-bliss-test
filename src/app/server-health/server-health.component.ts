import { Component, OnInit } from '@angular/core';
import { ServerHealthService } from '../server-health.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-health',
  templateUrl: './server-health.component.html',
  styleUrls: ['./server-health.component.less']
})
export class ServerHealthComponent implements OnInit {

  checkingHealth = true;

  constructor(private serverHealthService: ServerHealthService,
    private router: Router) { }

  ngOnInit() {
    this.checkServerHealth();
  }

  checkServerHealth(): void {
    this.checkingHealth = true;
    // The purpose of the setTimout() is just to simulate the call to the backend
    setTimeout(() => {
      this.serverHealthService.getServerHealth()
      .subscribe(result => {
        if (result.status === 'OK') {
          // The server is working properly -> navigate to the questions lis
          this.router.navigate(['/questions']);
        } else {
          // The server is not working -> show retry button
          this.checkingHealth = false;
        }
      });
    }, 2000);
  }

}
