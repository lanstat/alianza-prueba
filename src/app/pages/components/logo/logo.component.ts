import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

import {environment} from 'src/environments/environment';
import {EsModuleService} from "../../../services/es-module.service";


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  
  @ViewChild('LogoComponent', {static: true}) LogoComponent;

  templatePath:string = `${environment.frontend.template.canvas}`;
  
  constructor(
      private viewContainerRef: ViewContainerRef,
      private esModuleService: EsModuleService
  ) {
    this.esModuleService.loadByUrl([], []);
  }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.LogoComponent);
  }

}
