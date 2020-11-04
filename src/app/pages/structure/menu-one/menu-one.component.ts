import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-menu-one',
  templateUrl: './menu-one.component.html',
  styleUrls: ['./menu-one.component.scss']
})
export class MenuOneComponent implements OnInit {
  
  @ViewChild('MenuOneComponent', {static: true}) MenuOneComponent;
  
  templatePath:string = `${environment.frontend.template.canvas}`;

constructor(
    private viewContainerRef: ViewContainerRef
  ) {}
  
  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.MenuOneComponent);
  }
}
