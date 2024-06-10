import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCollection2Component } from './card-collection-2.component';

describe('CardCollection2Component', () => {
  let component: CardCollection2Component;
  let fixture: ComponentFixture<CardCollection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCollection2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCollection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
