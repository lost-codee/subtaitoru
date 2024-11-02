export interface WordInfo {
  word: string;
  reading: string;
  senses: Array<{ english_definitions: string; parts_of_speech: string }>;
  jlptLevel?: string;
  lastReviewed: Date;
  reviewCount: 0;
  confidence: 0;
  srsLevel: 0;
  dueDate: Date;
}
