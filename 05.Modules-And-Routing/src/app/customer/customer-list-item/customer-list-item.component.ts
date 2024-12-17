import { Component, Input, OnInit } from '@angular/core';
import { ICustomer } from '../customer.service';

@Component({
  selector: 'app-customer-list-item',
  templateUrl: './customer-list-item.component.html',
  styleUrl: './customer-list-item.component.css'
})
export class CustomerListItemComponent implements OnInit {
  date = new Date();
  limit = 15;
  
  @Input() item!: ICustomer;

  ngOnInit(): void {
    setTimeout(() => {
      this.item = {
        ...this.item,
        email: 'test@abv.bg'
      }
     // this.item.email = 'test@abv.bg';
    }, 2000)
  }

  expandOrShrink() {
    this.limit = this.limit === 15 ? Infinity : 15;
  }

}
