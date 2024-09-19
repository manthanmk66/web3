/* Assignment #1
 What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?
 A: You will have to brute force until you find a value that starts with 00000*/







const crypto = require("crypto");

function generateHash(data) {
  return crypto
    .createHash("sha256")  // Use SHA-256 as the hashing algorithm
    .update(data)          // Provide the data to hash
    .digest("hex");        // Output the hash in hex format
}

let i = 0;
let found = false;

while (!found) {
  const data = i.toString();           
  const hash = generateHash(data);     
  const firstFiveLetters = hash.slice(0, 5); 

  if (firstFiveLetters === "00000") {  
    console.log("Matching Hash:", hash);
    console.log("First Five Letters:", firstFiveLetters);
    console.log("Data:", data);        
    found = true;  
  }
  
  i++; 
}
