import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RasporedComponent } from './raspored.component';

describe('RasporedComponent', () => {
  let component: RasporedComponent;
  let fixture: ComponentFixture<RasporedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RasporedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RasporedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
