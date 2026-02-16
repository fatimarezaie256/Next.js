type Author = {
  name: string;
  bio: string;
  nationality: string;
};
export default async function book() {
  const book = await fetch("http://localhost:8000/api/author");
  const returnedBook = await book.json();
  const author: Author[] = returnedBook.author;
  return (
    <div className="">
      <div className="my-10  mx-auto">
        <h1 className="text-center font-bold p-5 text-2xl">Author's Info</h1>
        <table className="border py-4 px-6 mx-auto rounded-md">
          <thead>
            <tr>
              <th className="border px-4 py-2 bg-black text-white">Name</th>
              <th className="border px-4 py-2 bg-black text-white">
                Biography
              </th>
              <th className="border px-4 py-2 bg-black text-white">
                Nationality
              </th>
            </tr>
          </thead>
          <tbody>
            {author.map((auth, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{auth.name}</td>
                <td className="border px-4 py-2">{auth.bio}</td>
                <td className="border px-4 py-2">{auth.nationality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
