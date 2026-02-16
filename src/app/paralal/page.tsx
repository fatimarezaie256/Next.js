import React from "react";

type post = {
  id: number;
  title: string;
  body: string;
};
type album = {
  id: number;
  title: string;
};
async function getpost(id: string): Promise<post[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userid = ${id}`
  );
  return response.json();
}
async function getalbum(id: string): Promise<album[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userid = ${id}`
  );
  return res.json();
}
async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postdata = getpost(id);
  const albumdata = getalbum(id);
  const [post, album] = await Promise.all([postdata, albumdata]);

  return (
    <div className="h-screen w-full bg-black grid grid-cols-2 gap-4 ">
      <div className="flex flex-col gap-2">
        {/* posts */}
        {post.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded-md">
            <label htmlFor="" className="font-bold uppercase">
              title:
            </label>
            <h1 className="text-2xl text-green-700">{p.title}</h1>
            <label htmlFor="" className="font-bold uppercase inline">
              text:
            </label>
            <p className="inline-block">{p.body}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {/* albums */}
        {album.map((a) => (
          <div key={a.id} className="text-white bg-blue-700 p-4 rounded-md">
            <label htmlFor="" className="font-bold uppercase">
              title:
            </label>
            <h1>{a.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
