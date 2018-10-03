import { CrearrutaModule } from './crearruta.module';

describe('CrearrutaModule', () => {
  let crearrutaModule: CrearrutaModule;

  beforeEach(() => {
    crearrutaModule = new CrearrutaModule();
  });

  it('should create an instance', () => {
    expect(crearrutaModule).toBeTruthy();
  });
});
