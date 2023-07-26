import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskedFieldComponent } from './masked.field.component';

describe('MaskedFieldComponent', () => {
  let component: MaskedFieldComponent;
  let fixture: ComponentFixture<MaskedFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MaskedFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaskedFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
