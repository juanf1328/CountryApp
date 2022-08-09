import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyPaisComponent } from './only-pais.component';

describe('OnlyPaisComponent', () => {
  let component: OnlyPaisComponent;
  let fixture: ComponentFixture<OnlyPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
