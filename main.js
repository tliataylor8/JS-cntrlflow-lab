
const PI = 3.1415;
const radius = 5;
const gardenCap = PI * radius * radius;

let eachPlant = 0.8;

let w1Plants= 20; 
let w2Plants= w1Plants * 2;
let w3Plants= w2Plants * 2;
let w4Plants= w3Plants * 2;

// #0.5
let maxPlants = gardenCap / eachPlant;
console.log(`Max plants allowed in garden area: ${maxPlants}`)

// Implement flow control
// **check your functions for the ifelse for each week
// w1
if (w1Plants>(0.8*maxPlants)){
    console.log(`Prune`)  
} else if (0.8>w1Plants>0.5){
    console.log(`Monitor`)
} else if (w1Plants < 0.5) {
    console.log(`Plant`)
}
// w2
if (w2Plants>(0.8*maxPlants)){
    console.log(`Prune`)  
} else if (0.8>w2Plants>0.5){
    console.log(`Monitor`)
} else if (w2Plants < 0.5) {
    console.log(`Plant`)
}
// w3
if (w3Plants>(0.8*maxPlants)){
    console.log(`Prune`)  
} else if (0.8>w3Plants>0.5){
    console.log(`Monitor`)
} else if (w3Plants < 0.5) {
    console.log(`Plant`)
}


// PART 2
// DETERMINE: The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.If the space remained circular, what would be the radius of this expanded garden?

let w1Plants= 100; 
let w2Plants= w1Plants * 2;
let w3Plants= w2Plants * 2;
let w4Plants= w3Plants * 2;
let w5Plants= w4Plants * 2;
let w6Plants= w5Plants * 2;
let w7Plants= w6Plants * 2;
let w8Plants= w7Plants * 2;
let w9Plants= w8Plants * 2;
let w10Plants= w9Plants * 2;

let w10Plspace= w10Plants * eachPlant;
console.log(`If you started with 100 plants, this is the space needed if you haven't pruned after 10 weeks: ${w10Plspace} meters squared`);
let newRadius= Math.sqrt(w10Plspace/PI);
console.log(`Based on the 10 week space, this would be the new radius: ${newRadius}`);
// => If you started with 100 plants, this is the space needed if you haven't pruned after 10 weeks: 40960 meters squared     
// for the 10 week space, it would be the new radius: 114.1856272590599


// PART 3

let w1Plants = 100; 
let w2Plants = w1Plants * 2;
let w3Plants = w2Plants * 2;
let w4Plants = w3Plants * 2;
let w5Plants = w4Plants * 2;
let w6Plants = w5Plants * 2;
let w7Plants = w6Plants * 2;
let w8Plants = w7Plants * 2;
let w9Plants = w8Plants * 2;
let w10Plants = w9Plants * 2;

let w10Plspace = w10Plants * eachPlant;
console.log(`Starting with 100, if you haven't pruned after 10 weeks: ${w10Plspace} meters squared`);

let newRadius = Math.sqrt(w10Plspace / PI);
console.log(`New radius after 10 weeks: ${newRadius}`);
try {
    if (w1Plants * eachPlant > gardenCap) {
        throw new Error("Initial plant # exceeds garden capacity!");
    } else {
        console.log("There is enough space for the initial 100 plants.");
    }
} catch (error) {
    console.log(`Error: ${error.message}`);
}
