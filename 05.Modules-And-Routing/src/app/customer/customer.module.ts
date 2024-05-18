import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerListItemComponent } from './customer-list-item/customer-list-item.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerProfileAlbumsComponent } from './customer-profile-albums/customer-profile-albums.component';
import { CustomerProfilePostsComponent } from './customer-profile-posts/customer-profile-posts.component';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerListItemComponent,
    CustomerProfileComponent,
    CustomerProfileAlbumsComponent,
    CustomerProfilePostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CustomerListComponent
  ]
})
export class CustomerModule { }
