import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDropdownMenuComponent } from './nz-dropdown-menu.component';

describe('NzDropdownMenuComponent', () => {
  let component: NzDropdownMenuComponent;
  let fixture: ComponentFixture<NzDropdownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzDropdownMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NzDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
