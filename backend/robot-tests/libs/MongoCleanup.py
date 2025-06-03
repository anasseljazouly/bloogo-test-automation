from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

DB_NAME = "test"

def delete_test_user(email):
    client = MongoClient(os.getenv("MONGODB_URI"))
    try:
        db = client[DB_NAME]
        result = db["user"].delete_one({"email": email})
        print(f"Deleted {result.deleted_count} user(s) with email {email}")
    finally:
        client.close()
