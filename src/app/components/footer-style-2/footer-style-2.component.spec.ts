import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterStyle2Component } from './footer-style-2.component';

describe('FooterComponent', () => {
  let component: FooterStyle2Component;
  let fixture: ComponentFixture<FooterStyle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterStyle2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterStyle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
