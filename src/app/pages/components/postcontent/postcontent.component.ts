import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

import {environment} from 'src/environments/environment';
import {EsModuleService} from "../../../services/es-module.service";
import {PuntoGeograficoService} from "../../../services/punto-geografico.service";

@Component({
  selector: 'app-postcontent',
  templateUrl: './postcontent.component.html',
  styleUrls: ['./postcontent.component.scss']
})
export class PostcontentComponent implements OnInit {
  
  @ViewChild('PostcontentComponent', {static: true}) PostcontentComponent;
  templatePath:string = `${environment.frontend.template.canvas}`;
  
  id:number;
  latitud:number;
  longitud:number;
  nombre:string;
  
  constructor(
    private viewContainerRef: ViewContainerRef,
    private esModuleService: EsModuleService,
    private puntoGeograficcoService:PuntoGeograficoService
  ) {
    this.esModuleService.loadScriptByUrl(this.templatePath + '/js/libs/submit-handler.js');
  }
  
  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.PostcontentComponent);
    
  }
  
  savePoint() {
    let punto = {id: this.id, nomber: this.nombre, latitud: this.latitud, longitud:this.longitud};
    this.puntoGeograficcoService.setPuntoIndexedDB(punto)
  }
}

