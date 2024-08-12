import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopNavbarComponent } from './shop-navbar.component';

describe('ShopNavbarComponent', () => {
  let component: ShopNavbarComponent;
  let fixture: ComponentFixture<ShopNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
