// import pkg from 'pg';
// import 'dotenv/config';

// const { Client } = pkg;

// const client = new Client({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// async function createDatabase() {
//   try {
//     await client.connect();
//     await client.query(`CREATE DATABASE ${process.env.DB_NAME}`);
//     console.log(`Database ${process.env.DB_NAME} created successfully`);
//   } catch (error) {
//     console.error('Error creating database:', error);
//   } finally {
//     await client.end();
//   }
// }

// createDatabase();
