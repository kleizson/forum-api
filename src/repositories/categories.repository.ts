import { CategoryBody } from "../interfaces/request.interface";
import { getDatabase } from "../../config/firebase.config";

const databaseRef = getDatabase().ref().child("/categories");

export default {
  create(requestBody: CategoryBody): void {
    databaseRef.push({
      ...requestBody,
      timestamp: getDatabase.ServerValue.TIMESTAMP,
    });
  },
  async getAll() {
    const result = await databaseRef.once("value");

    return result;
  },
  async remove(categoryUid: string) {
    const result = await databaseRef.child(categoryUid).remove();

    return result;
  },
};
