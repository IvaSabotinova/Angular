import { Component, Input } from '@angular/core';
import { ICustomer } from '../customer.service';

@Component({
  selector: 'app-customer-list-item',
  templateUrl: './customer-list-item.component.html',
  styleUrl: './customer-list-item.component.css'
})
export class CustomerListItemComponent {
  @Input() item!: ICustomer;
}
