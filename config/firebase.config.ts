import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";

initializeApp({
  credential: applicationDefault(),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

export const database = getDatabase();
