import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { CustomerProfilePostsComponent } from './customer/customer-profile-posts/customer-profile-posts.component';
import { CustomerProfileAlbumsComponent } from './customer/customer-profile-albums/customer-profile-albums.component';
import { DefaultViewComponent } from './pages/default-view/default-view.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { customerPostsResolver } from './customer/customer-posts.resolver';
import { profileGuard } from './guards/profile.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'to-be-redirected'
  },
  {
    path: 'to-be-redirected',
    component: DefaultViewComponent
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: DefaultViewComponent
  // },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'customer/:id',
    //canActivate: [profileGuard],
    component: CustomerProfileComponent,   
    children: [
      {
        path: 'posts',
        resolve: { posts: customerPostsResolver},
        component: CustomerProfilePostsComponent
      },
      {
        path: 'albums',
        component: CustomerProfileAlbumsComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
