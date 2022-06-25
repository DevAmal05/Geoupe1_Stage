import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';

import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import { Page404Component } from './page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    Page404Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
