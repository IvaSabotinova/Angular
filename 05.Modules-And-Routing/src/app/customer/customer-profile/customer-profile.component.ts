import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CustomerService, ICustomer } from '../customer.service';
import { Title } from '@angular/platform-browser';
import { mergeMap, switchMap, tap } from 'rxjs';

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
    // this.isLoading = true;
    // this.id = this.activatedRoute.snapshot.params['id'];

    this.activatedRoute.params
    .pipe(
      tap(params => {
        this.isLoading = true;
        this.id = +params['id'];
        this.titleService.setTitle('Profile ' + this.id);
      }),
      ////MERGING TWO OBSERVABLES
      // mergeMap(params => {
      //   return this.customerService.getCustomerById$(params['id'])
      // }))
      //CANCELLING PREVIOUS NOT NEEDED HTTP REQUESTS
      switchMap(params => {
        return this.customerService.getCustomerById$(params['id'])
      }))
      .subscribe({
        next: customer => {
          this.customer = customer,
            this.isLoading = false
        },
        error: error => {
          this.isLoading = false;
          console.error('error happened', error)
        }
      })

    // this.activatedRoute.params.subscribe((params: Params) => {
    //   this.id = +params['id'];
    //   this.titleService.setTitle('Profile ' + this.id)
    //   this.customerService.getCustomerById$(this.id)
    //     .subscribe({
    //       next: customer => {
    //         this.customer = customer,
    //           this.isLoading = false
    //       },
    //       error: error => {
    //         this.isLoading = false;
    //         console.error('error happened', error)
    //       }
    //     });
    // })

    // this.customerService.getCustomerById$(this.id)
    //   .subscribe(customer => {
    //     this.customer = customer;
    //     this.isLoading = false;  
    //   });

    //this.titleService.setTitle('Profile ' + this.id)  

  }

}
