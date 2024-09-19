/* Assignment #2
What if I ask you that the input string should start with 100xdevs ? How would the code change? */

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
  const data =  "100xdevs" +i.toString();           
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
