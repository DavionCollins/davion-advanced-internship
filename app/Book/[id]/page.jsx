export default async function page({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
  );

  const book = await res.json();

  return (
    <div>
      <h1>{book.title}</h1>
    </div>
  );
}
