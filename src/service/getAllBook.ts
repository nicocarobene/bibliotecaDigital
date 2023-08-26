export async function getAllBook (){
  return (await import ('../mock/mock.json')).default;
}

export async function getBookById({id}:{id:string}){
  const books= (await import ('../mock/mock.json')).default
  return books.find(book=> book.id===id)
}