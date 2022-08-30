const { Book } = require('./book');

const customer = { id: 1, name: 'Kaio Silveira' };
const book = new Book();

book.addReservation(customer);
