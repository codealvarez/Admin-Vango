import { VerrutaModule } from './verruta.module';

describe('VerrutaModule', () => {
  let verrutaModule: VerrutaModule;

  beforeEach(() => {
    verrutaModule = new VerrutaModule();
  });

  it('should create an instance', () => {
    expect(verrutaModule).toBeTruthy();
  });
});
