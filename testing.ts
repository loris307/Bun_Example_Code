const file = Bun.file("./foo.txt");
const json = await file.json() 

console.log(json)



export { };
