const assert = require('node:assert');

class Book {
  constructor({ reservations } = { reservations: [] }) {
    this._reservations = reservations;
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
