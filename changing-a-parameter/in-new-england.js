function inNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}

function zzNEW_inNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

module.exports = { inNewEngland, zzNEW_inNewEngland };
