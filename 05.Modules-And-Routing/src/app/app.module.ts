import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './customer/customer.module';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CoreModule } from './core/core.module';
import { DefaultViewComponent } from './pages/default-view/default-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DefaultViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    CoreModule,
    CustomerModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
