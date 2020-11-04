import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {EsModuleService} from "../services/es-module.service";

import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-google-map-index',
  templateUrl: './google-map-index.component.html',
  styleUrls: ['./google-map-index.component.scss']
})
export class GoogleMapIndexComponent implements OnInit {
  
  @ViewChild('GoogleMapIndexComponent', {static: true}) GoogleMapIndexComponent;
  
  templatePath:string = `${environment.frontend.template.canvas}`;

constructor(
    private viewContainerRef: ViewContainerRef,
    private esModuleService: EsModuleService
  ) {
    this.esModuleService.loadScriptByUrl(this.templatePath + '/js/libs/gmap.js');
    this.esModuleService.loadScriptByUrl(this.templatePath + '/js/libs/google-map.js');
    this.esModuleService.loadScriptByUrl('/assets/canvas/js/libs/markerclusterer.js');
    this.esModuleService.loadScriptByUrl('/assets/canvas/js/jquery.gmap.js');
  }
  
  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.GoogleMapIndexComponent);
    
  }
}
