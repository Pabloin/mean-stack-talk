import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPlacesComponent } from './grid-places.component';

describe('GridPlacesComponent', () => {
  let component: GridPlacesComponent;
  let fixture: ComponentFixture<GridPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
