const app = require('./app');
const connectDatabase = require('./config/database');

const dotenv = require('dotenv');

//handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log('Shutting down server due to uncaught exception');
  process.exit(1);
});

// Setting up config
dotenv.config({ path: 'backend/config/config.env' });

//Connecting to db
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server running on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

//Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log('Shutting down server due to unhandled promise rejections');
  server.close(() => {
    process.exit(1);
  });
});
