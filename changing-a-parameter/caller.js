const { zzNEW_inNewEngland } = require('./in-new-england');

someCustomers = [
  { id: 1, address: { state: 'MA' } },
  { id: 2, address: { state: 'CT' } },
  { id: 3, address: { state: 'ME' } },
  { id: 4, address: { state: 'VT' } },
];

const newEnglanders = someCustomers.filter(customer => zzNEW_inNewEngland(customer.address.state));

console.log(`new englanders: ${newEnglanders.map(c => c.id).join(', ')}`);
