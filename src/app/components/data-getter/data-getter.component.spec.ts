import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGetterComponent } from './data-getter.component';

describe('DataGetterComponent', () => {
  let component: DataGetterComponent;
  let fixture: ComponentFixture<DataGetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataGetterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataGetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
