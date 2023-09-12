import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservaDeHorasComponent } from './reserva-de-horas.component';

describe('ReservaDeHorasComponent', () => {
  let component: ReservaDeHorasComponent;
  let fixture: ComponentFixture<ReservaDeHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaDeHorasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReservaDeHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
