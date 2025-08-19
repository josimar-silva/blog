export enum BookType {
  PAPER,
  BOOK,
}

export enum BookStatus {
    READING,
    COMPLETED,
    DROPPED,
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
