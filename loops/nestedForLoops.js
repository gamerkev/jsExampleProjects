let bobsFollowers = ["joe", "james", "joel", "richard"];
let tinasFollowers = ["helena", "richard", "james"];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i=i+1){
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] == tinasFollowers[j]){
    mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(`bob and tina share the following followers: ${mutualFollowers}!`);