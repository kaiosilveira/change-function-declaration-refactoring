const { inNewEngland } = require('./in-new-england');

describe('inNewEngland', () => {
  it('should return false if a customer is not a new englander', () => {
    const stateCode = 'SP';
    expect(inNewEngland(stateCode)).toEqual(false);
  });

  it('should return true if a customer is not a new englander', () => {
    const stateCode = 'MA';
    expect(inNewEngland(stateCode)).toEqual(true);
  });
});
