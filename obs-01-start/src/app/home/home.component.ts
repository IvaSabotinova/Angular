import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.firstObSubscription = interval(1000).subscribe(x => {
      console.log(x);

    })
  }

  ngOnDestroy() {
    this.firstObSubscription.unsubscribe();
  }

}
