import "server-only";
export const serverFunction = ()=>{
      console.log("This is some sensitive information");
      return "This should available be only on server";
}