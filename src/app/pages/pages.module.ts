import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { BrowserModule} from "@angular/platform-browser";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AgmCoreModule} from "@agm/core";
import {ContactOneComponent} from "./components/contact/contact-one/contact-one.component";
import {GoogleMapIndexComponent} from "../google-map-index/google-map-index.component";
import {PostcontentComponent} from "./components/postcontent/postcontent.component";
import {HeaderOneComponent} from "./structure/header-one/header-one.component";
import {GoogleMapOneComponent} from "./components/google-map-one/google-map-one.component";
import {LogoComponent} from "./components/logo/logo.component";
import {MenuOneComponent} from "./structure/menu-one/menu-one.component";
import {EsModuleService} from "../services/es-module.service";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PagesComponent,
    ContactOneComponent,
    GoogleMapIndexComponent,
    ContactOneComponent,
    PostcontentComponent,
    HeaderOneComponent,
    GoogleMapOneComponent,
    LogoComponent,
    MenuOneComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCOUSp30wEWljD8LvCGfdh4LMV0VVVy84I'
    })
  ],
  providers: [
    EsModuleService,
    {provide: 'module', useValue:'canvas'}
  ],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
