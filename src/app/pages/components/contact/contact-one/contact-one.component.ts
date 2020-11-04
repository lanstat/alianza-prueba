import { Component, OnInit } from '@angular/core';

import {environment} from 'src/environments/environment';
import {EsModuleService} from "../../../../services/es-module.service";

@Component({
  selector: 'app-contact-one',
  templateUrl: './contact-one.component.html',
  styleUrls: ['./contact-one.component.scss']
})
export class ContactOneComponent implements OnInit {
  
  templatePath:string = `${environment.frontend.template.canvas}`;

constructor(
    private esModuleService: EsModuleService
  ) {
    this.esModuleService.loadScript('jquery');
    this.esModuleService.loadByUrl([
      'http://fonts.googleapis.com/css?family=Lato:300,400,400italic,600,700|Raleway:300,400,500,600,700|Crete+Round:400italic',
      this.templatePath + "/css/bootstrap.css",
      this.templatePath + "/style.css",
      this.templatePath + "/css/dark.css",
      this.templatePath + "/css/font-icons.css",
      this.templatePath + "/css/animate.css",
      this.templatePath + "/css/magnific-popup.css",
      this.templatePath + "/css/responsive.css",
    ],[
      'http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js',
      this.templatePath + '/js/plugins.js',
      this.templatePath + '/js/functions.js'
    ]);
  }

  ngOnInit(): void {
  }

}
