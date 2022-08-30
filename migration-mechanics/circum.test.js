const { circumference } = require('./circum');

describe('circumference', () => {
  it('should calculate the circumference for a given radius', () => {
    const result = circumference(10);
    expect(62.83185307179586).toEqual(result);
  });
});
