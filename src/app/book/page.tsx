import Image from "next/image";

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
// Blindness Book
export default async function book() {
  const response = await fetch("http://localhost:8000/api/author");
  const book = await response.json();
  const books: book[] = book.Books;
  return (
    <div>
      {books.map((book, index) => (
        <div>
          <Image src={book.cover_image} alt="book" />
          <h1>{book.title}</h1>
          <h2>{book.description}</h2>
          <span>{book.genre}</span>
        </div>
      ))}
    </div>
  );
}
