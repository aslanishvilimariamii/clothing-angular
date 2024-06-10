import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiweekCardComponent } from './modiweek-card.component';

describe('ModiweekCardComponent', () => {
  let component: ModiweekCardComponent;
  let fixture: ComponentFixture<ModiweekCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModiweekCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModiweekCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
