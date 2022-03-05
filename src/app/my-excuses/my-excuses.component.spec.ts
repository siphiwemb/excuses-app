import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExcusesComponent } from './my-excuses.component';

describe('MyExcusesComponent', () => {
  let component: MyExcusesComponent;
  let fixture: ComponentFixture<MyExcusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyExcusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExcusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
