import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFooterComponent } from './shop-footer.component';

describe('ShopFooterComponent', () => {
  let component: ShopFooterComponent;
  let fixture: ComponentFixture<ShopFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
