import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarplaylistComponent } from './listarplaylist.component';

describe('ListarplaylistComponent', () => {
  let component: ListarplaylistComponent;
  let fixture: ComponentFixture<ListarplaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarplaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
