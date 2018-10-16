import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule }            from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }           from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// import { nib } from '../../node_modules/nib';

import { AppComponent }   from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SideQueueComponent } from './components/side-queue/side-queue.component';
import { MainQueueComponent } from './components/main-queue/main-queue.component';

// import {RoutesArray} from './../app.routes';

/**
 * ROUTES
 */
const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideQueueComponent,
    MainQueueComponent
  ],
  imports: [
    NgbModule.forRoot(), // Bootstrap module
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // debugging purposes only
    ),
    HttpModule
  ],
  providers: [
    {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
