import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLinkItemsComponent } from './footer-link-items.component';

describe('FooterLinkItemsComponent', () => {
  let component: FooterLinkItemsComponent;
  let fixture: ComponentFixture<FooterLinkItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLinkItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterLinkItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
