const Color = require('./models/Color');

async function initializeDatabase() {
  try {
    const count = await Color.countDocuments();
    if (count === 0) {
      const colors = [
        { name: 'Red' },
        { name: 'Green' },
        { name: 'Blue' },
        { name: 'Yellow' },
        { name: 'Pink' },
        { name: 'Black' },
        { name: 'White' }
      ];
      await Color.insertMany(colors);
      console.log('Initial colors added');
    }
  } catch (err) {
    console.error('Error initializing the database:', err);
  }
}

module.exports = initializeDatabase;
