// generateToken.js
import jwt from 'jsonwebtoken'; // or use require('jsonwebtoken') if not using ES Modules

const token = jwt.sign(
  { user_id: '123456' },     // this must match what your Survey.jsx expects
  'secret_key',              // same key used in JWT.decode in your app
  { algorithm: 'HS256' }
);

console.log("JWT Token:\n", token);
