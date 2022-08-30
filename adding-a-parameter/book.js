const assert = require('node:assert');

class Book {
  constructor({ reservations } = { reservations: [] }) {
    this._reservations = reservations;
  }

  /**
   * @deprecated Use zzNEW_addReservation instead
   */
  addReservation(customer) {
    this.zzNEW_addReservation(customer, false);
  }

  zzNEW_addReservation(customer, isPriority) {
    assert(
      [true, false].includes(isPriority),
      'Expected the isPriority: Boolean parameter to be provided.'
    );

    this._reservations.push(customer);
  }

  fetchReservations() {
    return [...this._reservations];
  }
}

module.exports = { Book };
