import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { ThemesModule } from './feature/themes/themes.module';
import { PagesModule } from './feature/pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,      
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    CoreModule.forRoot(),
    PagesModule,
    AuthModule,
    ThemesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
