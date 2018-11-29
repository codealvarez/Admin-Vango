import { ConductoresModule } from './conductores.module';

describe('ConductoresModule', () => {
  let conductoresModule: ConductoresModule;

  beforeEach(() => {
    conductoresModule = new ConductoresModule();
  });

  it('should create an instance', () => {
    expect(conductoresModule).toBeTruthy();
  });
});
