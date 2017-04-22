import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarplaylistComponent } from './administrarplaylist.component';

describe('AdministrarplaylistComponent', () => {
  let component: AdministrarplaylistComponent;
  let fixture: ComponentFixture<AdministrarplaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarplaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
