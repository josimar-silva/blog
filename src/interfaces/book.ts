/*eslint no-unused-vars: "off" */

export const enum BookType {
  PAPER = "Paper",
  BOOK = "Book",
}

export const enum BookStatus {
    READING = "Reading",
    COMPLETED = "Completed",
    DROPPED = "Dropped",
}

export type Book = {
  id: string;
  slug: string;
  title: string;
  type: BookType;
  author: string;
  dateRead: string;
  coverImage: string;
  rating: number;
  status: BookStatus;
  pages: number;
  notes: string;
  keyTakeaways: string[];
  category: string;
  links: {
      amazon?: string,
      goodreads?: string,
      arxiv?: string,
      paperswithcode?: string,
  };
};
