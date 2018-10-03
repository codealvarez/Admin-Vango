import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerrutaComponent } from './verruta.component';

describe('VerrutaComponent', () => {
  let component: VerrutaComponent;
  let fixture: ComponentFixture<VerrutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerrutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
