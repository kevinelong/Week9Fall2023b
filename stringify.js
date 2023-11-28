//OPPOSITE OF PARSE IS STRINGIFY
const real_data = [
    {
        "id": 1,
        "name": "Kevin"
    },
    {
        "id": 2,
        "name": "Nina"
    }
];

console.log(real_data)

console.log( JSON.stringify(real_data) )//not pretty
console.log(JSON.stringify(real_data,undefined,4)) //pretty