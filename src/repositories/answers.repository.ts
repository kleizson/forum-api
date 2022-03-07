import { AnswerBody } from "src/interfaces/request.interface";
import { getDatabase } from "../../config/firebase.config";

const databaseRef = getDatabase().ref().child("/answers");

export default {
  create(requestBody: AnswerBody): void {
    const { author, body, questionUid } = requestBody;

    databaseRef.child(questionUid).push({
      author,
      body,
      timestamp: getDatabase.ServerValue.TIMESTAMP,
    });
  },
  async getAllByQuestion(questionUid: string) {
    const result = await databaseRef.child(questionUid).once("value");

    return result;
  },
};
