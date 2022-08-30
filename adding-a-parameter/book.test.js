const { Book } = require('./book');

describe('Book', () => {
  const aCustomer = { id: 1, name: 'Kaio Silveira' };

  describe('addReservation', () => {
    it('should allow to add a reservation for a customer', () => {
      const book = new Book();

      book.addReservation(aCustomer);

      const reservations = book.fetchReservations();
      expect(reservations).toHaveLength(1);
      expect(reservations[0].id).toEqual(aCustomer.id);
      expect(reservations[0].name).toEqual(aCustomer.name);
    });
  });

  describe('fetchReservations', () => {
    it('should return an empty list if there are no reservations', () => {
      const book = new Book();
      const reservations = book.fetchReservations();
      expect(reservations).toEqual([]);
    });

    it('should return the list of reservations', () => {
      const existingReservations = [aCustomer];
      const book = new Book({ reservations: existingReservations });

      const reservations = book.fetchReservations();

      expect(reservations).toEqual(existingReservations);
    });
  });
});
