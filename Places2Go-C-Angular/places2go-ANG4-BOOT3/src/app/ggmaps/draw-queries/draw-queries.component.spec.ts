import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawQueriesComponent } from './draw-queries.component';

describe('DrawQueriesComponent', () => {
  let component: DrawQueriesComponent;
  let fixture: ComponentFixture<DrawQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
