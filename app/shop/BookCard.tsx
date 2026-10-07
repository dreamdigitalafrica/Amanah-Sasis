import { price, usdPrice } from './books';
export default function BookCard({ book, index = 0 }: { book: any; index?: number }) {
  return <article className="shop-blog-card catalogue-card init-delay">
    <div className="catalogue-frame">
      <a className="catalogue-cover" href={book.href} aria-label={`View ${book.title} ${book.subtitle}`}><img src={book.image} alt={`${book.title} ${book.subtitle}`} loading={index === 0 ? 'eager' : 'lazy'} /></a>
      {book.comingSoon ? <span className="coming-soon-badge">Coming soon</span> : <a className="sample-hover" href={`${book.href}#sample`}>Read sample</a>}
    </div>
    <div className="shop-price-row"><strong>{price}</strong><em>{usdPrice}</em></div>
    <div className="shop-mini-actions"><a href={book.href}>{book.comingSoon ? 'Preorder' : 'Buy now'}</a></div>
  </article>;
}
