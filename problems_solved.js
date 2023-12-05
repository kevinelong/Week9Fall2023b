/***
 * Given a set of coins, how can caculate the total?
 */

function total(coins) {
    //YOUR CODE HERE
    let sum = 0;

    //SOLUTION ONE
    // coins.forEach(c => sum += c);

    //SOLUTION TWO
    for(let i =0; i< coins.length; i++){
        sum += coins[i];
    }

    //REDUCE() COULD ALSO BE USED

    return sum
}
console.log(total([1, 1, 5, 10, 25, 25]) == 67)

/***
 * What is value of this collection of coins? Expressed as denomination:quantity in an object
 */
function getValue(dictObject){
    let sum = 0;
    //TODO 
    //for (const [key, value] of Object.entries(dictObject)) {
    //for (const key in dictObject) {
    //Object.keys(object1)
    //  for (const key in dictObject) {
    for (const denominationKey in dictObject){ //get keys
        const quantity = dictObject[denominationKey]
        sum +=  quantity * denominationKey;
    }
    return sum;
}
console.log(67 === getValue({
    25: 2,
    10: 1,
    5: 1,
    1: 2
}));

/***
 * What is the minumum set of coins to make change
 */
function makeChange(amount) {
    let output = [];
    //TODO WRITE CODE HERE
    const denominationList = [25,10,5,1]; //ALL POSSIBLE
    let index = 0;
    while(amount > 0){
        const d = denominationList[index];
        if(amount < d){
            index++;
        }else{
            amount -= d;
            output.push(d);
        }
    }
    return output;
}
console.log(JSON.stringify(makeChange(67)) === JSON.stringify([25,25,10,5,1,1]));
