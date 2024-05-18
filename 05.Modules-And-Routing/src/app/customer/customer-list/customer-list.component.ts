import { Component, OnInit } from '@angular/core';
import { CustomerService, ICustomer } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {  
    this.customerService.getCustomer$()
    .subscribe(customers=>{
      this.customers = customers;  
       
    })
  }
 
}
