export interface RequestBody<T> extends Express.Request {
  body: T;
}

export interface RequestParams<T> extends Express.Request {
  params: T;
}

export type QuestionsBody = {
  author: string;
  title: string;
  body: string;
  categoryUid: string;
};

export type QuestionParams = {
  questionUid: string;
};
