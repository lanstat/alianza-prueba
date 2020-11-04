import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {AlertModule} from "ngx-bootstrap/alert";
import {MenuOneComponent} from "./pages/structure/menu-one/menu-one.component";
import {LogoComponent} from "./pages/components/logo/logo.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot()
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})


export class AppModule { }
