import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarcancionComponent } from './administrarcancion.component';

describe('AdministrarcancionComponent', () => {
  let component: AdministrarcancionComponent;
  let fixture: ComponentFixture<AdministrarcancionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarcancionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarcancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
