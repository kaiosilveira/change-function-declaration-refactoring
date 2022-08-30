const { inNewEngland, zzNEW_inNewEngland } = require('./in-new-england');

describe('inNewEngland', () => {
  it('should return false if a customer is not a new englander', () => {
    const aCustomer = { id: 1, name: 'Kaio Silveira', address: { state: 'SP' } };
    expect(inNewEngland(aCustomer)).toEqual(false);
  });

  it('should return true if a customer is not a new englander', () => {
    const aCustomer = { id: 1, name: 'Kaio Silveira', address: { state: 'MA' } };
    expect(inNewEngland(aCustomer)).toEqual(true);
  });
});

describe('zzNEW_inNewEngland', () => {
  it('should return false if a customer is not a new englander', () => {
    const stateCode = 'SP';
    expect(zzNEW_inNewEngland(stateCode)).toEqual(false);
  });

  it('should return true if a customer is not a new englander', () => {
    const stateCode = 'MA';
    expect(zzNEW_inNewEngland(stateCode)).toEqual(true);
  });
});
