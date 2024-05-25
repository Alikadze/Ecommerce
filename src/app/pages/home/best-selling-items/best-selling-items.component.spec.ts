import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingItemsComponent } from './best-selling-items.component';

describe('BestSellingItemsComponent', () => {
  let component: BestSellingItemsComponent;
  let fixture: ComponentFixture<BestSellingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellingItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestSellingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
