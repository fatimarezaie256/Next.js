import { data } from "./data"; 
export async function GET(){
    return await Response.json(data);
};