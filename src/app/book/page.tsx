type book = {
  title: string;
  isbn: string;
  description: string;
  published_at: Date;
  total_copies: number;
  available_copies: number;
  cover_image: string;
  status: string;
  price: number;
  author_id: number;
  genre: string;
};
export default async function book() {
  const response = await fetch("http://localhost:8000/api/author");
  const book = await response.json();
  //   const books: book[] = book
}
