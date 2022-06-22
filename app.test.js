const getPercents = require('./app');

describe('test function getPercents', () => {
  it('test with number', () => {
    expect(getPercents(30,200)).toBe(60);
  });
  it('test with negative number', () => {
    expect(getPercents(-1,0)).toBe(0);
  });
  it('test with negative number', () => {
    expect(getPercents(-30,-200)).toBe(60);
  });
  it('test with string and number', () => {
    expect(getPercents('30',200)).toBe(60);
  });
  it('test with string', () => {
    expect(getPercents('30','200')).toBe(60);
  });
  it('test with string and number', () => {
    expect(getPercents('hi',-200)).toBe('invalid func arguments');
  });
})