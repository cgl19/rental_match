// db.js
const mongoose = require('mongoose');

// MongoDB connection string (use your own MongoDB URI)
const dbURI = 'mongodb://localhost:27017/mydatabase'; // For local MongoDB
// Or for MongoDB Atlas:
    // const dbURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority';

// Connecting to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

module.exports = mongoose;
