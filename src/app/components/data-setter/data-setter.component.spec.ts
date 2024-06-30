import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSetterComponent } from './data-setter.component';

describe('DataSetterComponent', () => {
  let component: DataSetterComponent;
  let fixture: ComponentFixture<DataSetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataSetterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
