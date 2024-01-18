import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import { Navi2Component } from './navi2/navi2.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { SlideComponent } from './slide/slide.component';
import { StartComponent } from './start/start.component';
import { BodyComponent } from './body/body.component';
import { ClinicComponent } from './clinic/clinic.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    Navi2Component,
    MainComponent,
    SlideComponent,
    StartComponent,
    BodyComponent,
    ClinicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
