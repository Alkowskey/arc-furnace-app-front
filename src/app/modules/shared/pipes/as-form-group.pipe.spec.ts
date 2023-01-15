import { AsFormGroupPipe } from './as-form-group.pipe';

describe('AsFormGroupPipe', () => {
  it('create an instance', () => {
    const pipe = new AsFormGroupPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return a FormGroup', () => {
    const pipe = new AsFormGroupPipe();
    const formGroup = pipe.transform({ test: 'test' } as any);
    expect(formGroup).toBeTruthy();
  });
});
