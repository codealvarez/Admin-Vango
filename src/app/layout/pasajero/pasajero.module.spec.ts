import { PasajeroModule } from './pasajero.module';

describe('PasajeroModule', () => {
  let pasajeroModule: PasajeroModule;

  beforeEach(() => {
    pasajeroModule = new PasajeroModule();
  });

  it('should create an instance', () => {
    expect(pasajeroModule).toBeTruthy();
  });
});
