const fruitList = Array.from({length:40},(_, index)=>({
    id:index+1,
    name:`fruit ${index+1}`,
}))

async function page({searchParams}:{searchParams:Promise<{page?:string}>}) {
    const pageNumberToString = await searchParams;
    const pagNumber = Number(pageNumberToString) || 1;
    const itemsPerPage = 8;
    const start = pagNumber-1 * itemsPerPage;
    const end = start + itemsPerPage;
    const items = fruitList.slice(start,end);
    const totalpage = Math.ceil(fruitList.length / itemsPerPage);
  return (
    <div className="flex flex-wrap justify-between">
           {items.map(fruit=>(
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"brown",padding:"4px"}} key={fruit.id}>
         <h1 className="text-2xl font-bold">{fruit.name}</h1>
            </div>
           ))}
    </div>
  )
}

export default page