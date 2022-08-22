import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeregistrovaniComponent } from './neregistrovani.component';

describe('NeregistrovaniComponent', () => {
  let component: NeregistrovaniComponent;
  let fixture: ComponentFixture<NeregistrovaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeregistrovaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeregistrovaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
