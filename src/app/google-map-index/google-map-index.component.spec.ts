import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapIndexComponent } from './google-map-index.component';

describe('GoogleMapIndexComponent', () => {
  let component: GoogleMapIndexComponent;
  let fixture: ComponentFixture<GoogleMapIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
