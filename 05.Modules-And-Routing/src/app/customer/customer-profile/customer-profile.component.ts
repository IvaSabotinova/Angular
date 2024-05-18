import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CustomerService, ICustomer } from '../customer.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrl: './customer-profile.component.css'
})
export class CustomerProfileComponent implements OnInit {
  customer!: ICustomer;
  isLoading: boolean = false;
  id: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private customerService: CustomerService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.id = this.activatedRoute.snapshot.params['id']; 

    this.customerService.getCustomerById$(this.id)
      .subscribe(customer => {
        this.customer = customer;
        this.isLoading = false;  
      });

      this.titleService.setTitle('Profile ' + this.id)

  }

}
