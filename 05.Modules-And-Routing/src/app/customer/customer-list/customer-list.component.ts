import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService, ICustomer } from '../customer.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customers: ICustomer[] = [];

 // subscription: Subscription = new Subscription();

  customers$: Observable<ICustomer[]> = new Observable<ICustomer[]>();

  constructor(private customerService: CustomerService) {}
  
  ngOnInit(): void {  
    // this.subscription = this.customerService.getCustomer$()
    // .subscribe(customers=>{
    //   this.customers = customers;       
    // });

    this.customers$ = this.customerService.getCustomer$();
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }
 
}
