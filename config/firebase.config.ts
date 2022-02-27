import { applicationDefault, initializeApp } from "firebase-admin/app";
import { database } from "firebase-admin";

initializeApp({
  credential: applicationDefault(),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

export const getDatabase = database;
