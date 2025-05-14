import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const MONGODB_URI = process.env.MONGODB_URI || '';
const DB_NAME = 'test';

export async function createTestUser({ email, password, isverified }) {
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(DB_NAME);
  const users = db.collection('user');

  const hashedPassword = await bcrypt.hash(password, 10);

  await users.insertOne({
    email,
    password: hashedPassword,
    isverified,
    firstname: 'Test',
    lastname: 'User',
    dob: new Date('1990-01-01'),
    createdon: new Date(),
    isgooglelogin: false,
    profileurl: '',
    verification: isverified ? 'verified' : 'unverified'
  });

  await client.close();
  return null;
}

export async function deleteTestUser({ email }) {
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(DB_NAME);
  const users = db.collection('user');

  // Delete the user by email
  await users.deleteOne({ email });
  client.close();
  return null;
}
