import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileComponent } from './mobile/mobile.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { BasicphoneComponent } from './basicphone/basicphone.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    SmartphoneComponent,
    BasicphoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
