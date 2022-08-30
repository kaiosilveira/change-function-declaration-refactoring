class Book {
  constructor({ reservations } = { reservations: [] }) {
    this._reservations = reservations;
  }

  addReservation(customer) {
    this._reservations.push(customer);
  }

  fetchReservations() {
    return [...this._reservations];
  }
}

module.exports = { Book };
