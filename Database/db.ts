


import { Database } from "bun:sqlite";


const db = new Database("mydb.sqlite", { create: true });


db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
  )
`);


const insertUser = db.query("INSERT INTO users (name, email) VALUES (?, ?)");


insertUser.run("John Doe", "john.doe@example.com");
insertUser.run("Jane Smith", "jane.smith@example.com");


const users = db.query("SELECT * FROM users").all();

console.log(users);







const password = "super-secure-pa$$word";
const hash = await Bun.password.hash(password);
// => $argon2id$v=19$m=65536,t=2,p=1$tFq+9AVr1bfPxQdh...

const isMatch = await Bun.password.verify(password, hash);


