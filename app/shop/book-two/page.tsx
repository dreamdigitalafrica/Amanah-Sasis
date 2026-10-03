import BookDetail from '../BookDetail';
import { books } from '../books';

export default function BookTwoPage() {
  return <BookDetail book={books[1]} />;
}
