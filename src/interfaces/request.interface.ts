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

export type AnswerBody = {
  author: string;
  body: string;
  questionUid: string;
};

export type AnswerParams = {
  questionUid: string;
};

export type CategoryBody = {
  name: string;
};

export type CategoryParams = {
  categoryUid: string;
};
