import { Request } from "express";
import { getDatabase } from "../../config/firebase.config";

const databaseRef = getDatabase().ref().child("/questions");

export default {
  create(requestBody: Request): void {
    databaseRef.push({
      ...requestBody,
      timestamp: getDatabase.ServerValue.TIMESTAMP,
    });
  },
  async getAll() {
    const result = await databaseRef.once("value");

    return result;
  },
};
