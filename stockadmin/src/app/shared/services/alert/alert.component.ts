import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'; 
import { AlertService } from './alert.service';

@Component({
  selector: 'alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
      this.subscription = this.alertService.getMessage().subscribe(message => { 
      this.message = message; 
      setTimeout(() => {
        this.message = '';    
      }, 4000);
      });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
