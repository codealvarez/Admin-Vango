import { PasajerosModule } from './pasajeros.module';

describe('PasajerosModule', () => {
  let pasajerosModule: PasajerosModule;

  beforeEach(() => {
    pasajerosModule = new PasajerosModule();
  });

  it('should create an instance', () => {
    expect(pasajerosModule).toBeTruthy();
  });
});
