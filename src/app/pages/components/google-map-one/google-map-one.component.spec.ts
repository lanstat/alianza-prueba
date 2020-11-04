import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapOneComponent } from './google-map-one.component';

describe('GoogleMapOneComponent', () => {
  let component: GoogleMapOneComponent;
  let fixture: ComponentFixture<GoogleMapOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
