import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFieldComponent } from './child.field.component';

describe('ChildFieldComponent', () => {
  let component: ChildFieldComponent;
  let fixture: ComponentFixture<ChildFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChildFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
