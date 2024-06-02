import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ThemesModule } from './feature/themes/themes.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './feature/pages/pages.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,      
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    RouterModule,
    PagesModule,
    AuthModule,
    ThemesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
