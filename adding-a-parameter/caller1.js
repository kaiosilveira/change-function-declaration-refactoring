const { Book } = require('./book');

const customer1 = { id: 1, name: 'Kaio Silveira' };
const customer2 = { id: 2, name: 'Enzo Silveira' };
const book = new Book();

book.zzNEW_addReservation(customer1, false);
book.zzNEW_addReservation(customer2, true);
