import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostService } from './post.service';
import { storageServiceProvider } from './storage.service';
import { ThemeService } from './theme.service';
import { UserService } from './user.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule>{
    return {
      ngModule: CoreModule,
      providers: [
        UserService,
        storageServiceProvider,
        ThemeService,
        //PostService,
        {
          provide: PostService,
          useClass: PostService
        }
      ]
    }
  }
}
