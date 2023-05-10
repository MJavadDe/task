const fs = require("fs");

const pic = fs.readFileSync('./pic.jpg')


const dataGenerator = function* (data = pic) {
    for(let i = 0 ; i < data.length ; i++){
        yield data.slice(i,i+1)
    }
}

const generatedData = [...dataGenerator()]
console.log(generatedData);
