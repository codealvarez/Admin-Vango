import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearrutaComponent } from './crearruta.component';

describe('CrearrutaComponent', () => {
  let component: CrearrutaComponent;
  let fixture: ComponentFixture<CrearrutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearrutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
