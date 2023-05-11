const fs = require("fs");

const pic = fs.readFileSync('./pic.jpg')


const dataGenerator = function* (data = pic) {
    for(let i = 0 ; i <= data.length ; i+=1000){
        yield data.slice(i,i+1000)
    }
}
const data = [...dataGenerator()]
const generatedData = Buffer.concat(data)
const compare = Buffer.compare(generatedData,pic)
console.log(data);
console.log(generatedData);
console.log(compare);
