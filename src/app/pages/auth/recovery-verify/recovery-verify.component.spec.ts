import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryVerifyComponent } from './recovery-verify.component';

describe('RecoveryVerifyComponent', () => {
  let component: RecoveryVerifyComponent;
  let fixture: ComponentFixture<RecoveryVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoveryVerifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecoveryVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
