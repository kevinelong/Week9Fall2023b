const raw_text = `[
        {
            "id" : 1,
            "name" : "Kevin"
        },
        {
            "id" : 2,
            "name" : "Nina"
        }
]`;


const pet = "Dandy"
console.log(pet[0])
console.log(raw_text[0])

const real_data = JSON.parse(raw_text); //parse text return standard js arrays/objects
console.log(real_data[0].name)