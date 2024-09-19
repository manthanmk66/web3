
/*

Assignment #3
What if I ask you to find a nonce for the following input - 
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10

*/


const crypto = require("crypto");

function generateHash(data) {
  return crypto
    .createHash("sha256")  // Use SHA-256 as the hashing algorithm
    .update(data)          // Provide the data to hash
    .digest("hex");        // Output the hash in hex format
}

let i = 0;
let found = false;
const message=`harkirat => Raman | Rs 100 Ram => Ankit | Rs 10`;

while (!found) {
  const data = message+i.toString();           
  const hash = generateHash(data);     
  const firstFiveLetters = hash.slice(0, 5); 

  if (firstFiveLetters === "00000") {  
    console.log("Matching Hash:", hash);
    console.log("First Five Letters:", firstFiveLetters);
    console.log("Data:", data); 
    console.log(i);       
    found = true;  
  }
  
  i++; 
}
