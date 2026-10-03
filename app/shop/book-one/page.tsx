import BookDetail from '../BookDetail';
import { books } from '../books';

export default function BookOnePage() {
  return <BookDetail book={books[0]} />;
}
