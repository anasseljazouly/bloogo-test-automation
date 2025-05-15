import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const MONGODB_URI = process.env.MONGODB_URI || '';
const DB_NAME = 'test';

async function withDatabase<T>(callback: (db: any) => Promise<T>): Promise<T> {
  const client = new MongoClient(MONGODB_URI);
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    return await callback(db);
  } finally {
    await client.close();
  }
}

export async function createTestUser({
  email,
  password,
  isverified
}: {
  email: string;
  password: string;
  isverified: boolean;
}): Promise<null> {
  await withDatabase(async (db) => {
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
  });

  return null;
}

export async function deleteTestUser({
  email
}: {
  email: string;
}): Promise<void> {
  await withDatabase(async (db) => {
    const users = db.collection('user');
    await users.deleteOne({ email });
  });

  return null;
}

export async function createTag({ name }: { name: string }): Promise<null> {
  await withDatabase(async (db) => {
    const tags = db.collection('tags');
    await tags.insertOne({
      name
    });
  });

  return null;
}

export async function deleteTag({ name }: { name: string }): Promise<void> {
  await withDatabase(async (db) => {
    const tags = db.collection('tags');
    await tags.deleteOne({ name });
  });

  return null;
}
