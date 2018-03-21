export class Question {
  id: number;
  question: string;
  image_url: string;
  thumb_url: string;
  published_at: string;
  choices?: (ChoicesEntity)[] | null;
}
export class ChoicesEntity {
  choice: string;
  votes: number;
}
