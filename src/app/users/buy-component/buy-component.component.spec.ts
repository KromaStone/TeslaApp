import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyComponentComponent } from './buy-component.component';

describe('BuyComponentComponent', () => {
  let component: BuyComponentComponent;
  let fixture: ComponentFixture<BuyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
