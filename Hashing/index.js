const crypto = require('crypto');

// const input = "100xDevs";
// const hash = crypto.createHash('sha256').update(input).digest('hex');

// const createH = crypto.createHash('sha256');
// console.log(`printing createHash - > ${createH}`);
// const updateKaro  = createH.update(input)
// console.log(`printing updateKaro => ${updateKaro}`);
// const converHex = updateKaro.digest('hex');
// console.log(`convertHex -> ${converHex}`)

// console.log(`my hash function -> ${hash}`);




// ........................................................................................

// Assignment #1
// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?
// A: You will have to brute force until you find a value that starts with 00000


function createHashingFunction(prefix){
    let input = 0;
    while(true){
        let inputString = input.toString();
        const hash = crypto.createHash('sha256').update(inputString).digest('hex');
        if(hash.startsWith(prefix)){
            return{
                input:input,
                hash:hash
            }
        }
        input++;
    }
}


let result = createHashingFunction('00000');
console.log(`input1 : ${result.input}`);
console.log(`hash1: ${result.hash}`)







// Assignment #2
// What if I ask you that the input string should start with 100xdevs ? How would the code change?

function createHashFun(prefix){
    let input = 0;
    while(true){
        let inputStr = "100xdevs" + input.toString();
        const hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return{
                input:input,
                inputStr:inputStr,
                hash:hash
            }
        }
        input++;

    }
}

let result2 = createHashFun('00000');
console.log(`input2 : ${result2.input}`);
console.log(`inputstr2 : ${result2.inputStr}`);
console.log(`hash2: ${result2.hash}`)




// Assignment #3
// What if I ask you to find a nonce for the following input -

// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10


function createHashFun2(prefix){
    let input = 0;
    while(true){
        let inputStr = `harkirat => Raman | Rs 100
                     Ram => Ankit | Rs 10` 
                     + input.toString();
        const hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return{
                input:input,
                inputStr:inputStr,
                hash:hash
            }
        }
        input++;

    }
}

let result3 = createHashFun2('00000');
console.log(`input3 : ${result3.input}`);
console.log(`inputstr3 : ${result3.inputStr}`);
console.log(`hash3: ${result3.hash}`)