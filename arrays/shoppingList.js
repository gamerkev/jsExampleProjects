let arr = ["apples", "pears", "bananas"];
console.log(`currently we have to buy ${arr}`);
let item = "mango";
arr.push(item);
console.log(`after adding ${item}, our array now looks like ${arr}`);
arr.pop();
console.log(`we've found and purchased mango! so we've updated our shopping list to reflect this change, ${arr}`);

let shoppingList = [arr, ["chicken breast", "minced meat"]];

function countItems(nestedArr){
    let count = 0;
    for(let i = 0; i<nestedArr.length; i++){
        count += nestedArr[i].length;
    }
    return count;
}

console.log(`we also need proteins, so we've created a shopping list with fruits and proteins separated`);
console.log(`the whole list is ${shoppingList} and the fruits are ${shoppingList[0]}, with the proteins being ${shoppingList[1]}`);
console.log(`we need ${countItems(shoppingList)} items, ${shoppingList[0].length} of them being fruits, and ${shoppingList[1].length} being proteins`);

shoppingList[1][shoppingList[1].indexOf("minced meat")] = "quorn";
console.log(`the in-laws are coming over, better get quorn rather than mince, our new shopping list is ${shoppingList}`);