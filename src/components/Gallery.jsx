import posts from '../data/posts';

export default function Gallery() {
  return (
    <section className="gallery">
      {posts.map(post => (
        <figure key={post.id} className="tile">
          <img src={post.src} alt={post.alt} />
          <figcaption>
            <span>{post.date}</span>
            <span className="notes">{post.notes} notes</span>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
