// import "dotenv/config"
// import { Client } from "pg"
// import {drizzle} from "drizzle-orm/node-postgres";
// import * as schema from "./schema"


// export const client = new Client({
//     connectionString: process.env.DATABASE_URL as string
// });

// const main = async () =>{
//     await client.connect(); //connect to the database
   
// }

// main().catch(console.error)

// const db = drizzle(client,{schema, logger:true});
// export default db;

import "dotenv/config"
import {neon} from "@neondatabase/serverless"
import {drizzle} from "drizzle-orm/neon-http"
import * as schema from "./schema"

const client = neon(process.env.DATABASE_URL!)
const db = drizzle(client,{schema,logger:true})

export default db;



