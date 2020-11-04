import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import set = Reflect.set;

import {environment} from 'src/environments/environment';
import {EsModuleService} from "../../../services/es-module.service";

@Component({
  selector: 'app-google-map-one',
  templateUrl: './google-map-one.component.html',
  styleUrls: ['./google-map-one.component.scss']
})
export class GoogleMapOneComponent implements OnInit {
  
  @ViewChild('GoogleMapOneComponent', {static: true}) GoogleMapOneComponent;
  
  templatePath:string = `${environment.frontend.template.canvas}`;

  points: {lat: number, lng: number}[] = [];
  initialPoint: {lat: number, lng: number} = {
    lat: -17.7861266,
    lng: -63.19162
  };

constructor(
    private viewContainerRef: ViewContainerRef,
    private esModuleService: EsModuleService
  ) {
    // this.esModuleService.loadScriptByUrl(this.templatePath + '/js/libs/gmap.js');
    // this.esModuleService.loadScriptByUrl(this.templatePath + '/js/libs/google-map.js');
    // this.esModuleService.loadScriptByUrl(this.templatePath + '/js/libs/markerclusterer.js');
    // this.esModuleService.loadScriptByUrl(this.templatePath + '/js/jquery.gmap.js');
  }
  
  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.GoogleMapOneComponent);
    this.points.push({
      lat: -17.7861266,
      lng: -63.19162
    });

    this.points.push({
      lat: -16.6721582,
      lng: -68.3836665
    });
  }

}
