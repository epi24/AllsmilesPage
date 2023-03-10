import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENDComponent } from './end.component';

describe('ENDComponent', () => {
  let component: ENDComponent;
  let fixture: ComponentFixture<ENDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ENDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ENDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
