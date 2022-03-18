import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DancesComponent } from './dances.component';

describe('DancesComponent', () => {
  let component: DancesComponent;
  let fixture: ComponentFixture<DancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
