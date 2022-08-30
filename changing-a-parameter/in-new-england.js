/**
 *
 * @deprecated Use zzNEW_inNewEngland instead
 */
function inNewEngland(aCustomer) {
  return zzNEW_inNewEngland(aCustomer.address.state);
}

function zzNEW_inNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

module.exports = { inNewEngland, zzNEW_inNewEngland };
