import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureLinksItemComponent } from './feature-links-item.component';

describe('FeatureLinksItemComponent', () => {
  let component: FeatureLinksItemComponent;
  let fixture: ComponentFixture<FeatureLinksItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureLinksItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureLinksItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
