const file = Bun.file("./foo.txt");
const json = await file.json() 

console.log(json)

console.log(Bun.env.API_KEY)



export { };
