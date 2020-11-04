import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {
  
  @ViewChild('HeaderOneComponent', {static: true}) HeaderOneComponent;
  
  templatePath:string = `${environment.frontend.template.canvas}`;

constructor(
    private viewContainerRef: ViewContainerRef
  ) {}
  
  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.HeaderOneComponent);
  }
  
}
