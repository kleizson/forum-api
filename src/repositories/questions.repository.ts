import { QuestionsBody } from "src/interfaces/request.interface";
import { getDatabase } from "../../config/firebase.config";

const databaseRef = getDatabase().ref().child("/questions");

export default {
  create(requestBody: QuestionsBody): void {
    databaseRef.push({
      ...requestBody,
      timestamp: getDatabase.ServerValue.TIMESTAMP,
    });
  },
  async getAll() {
    const result = await databaseRef.once("value");

    return result;
  },
  async get(questionUid: string) {
    const result = await databaseRef.child(questionUid).once("value");

    return result;
  },
};
