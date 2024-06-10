import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiweekComponent } from './modiweek.component';

describe('ModiweekComponent', () => {
  let component: ModiweekComponent;
  let fixture: ComponentFixture<ModiweekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModiweekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModiweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
