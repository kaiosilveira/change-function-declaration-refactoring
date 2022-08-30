const { circum, circumference } = require('./circum');

describe('circum', () => {
  it('should calculate the circumference for a given radius', () => {
    const result = circum(10);
    expect(62.83185307179586).toEqual(result);
  });
});

describe('circumference', () => {
  it('should calculate the circumference for a given radius', () => {
    const result = circumference(10);
    expect(62.83185307179586).toEqual(result);
  });
});
