let nof_p = parseInt(prompt("How many participants?"));
let participants = [];

for (let i = 0; i < nof_p; i++)
{
    participants[i] = prompt("Name");
}

console.log(participants)