import { SanitizeNamePipe } from './sanitize-name.pipe';

describe('SanitizeNamePipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizeNamePipe();
    expect(pipe).toBeTruthy();
  });
});
