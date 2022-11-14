//Kysytään osanottajien määrä
let nof_p = parseInt(prompt("How many participants?"));
let participants = [];

//luetaan osanottajien nimet
for (let i = 0; i < nof_p; i++)
{
    participants[i] = prompt("Name");
}

//generoidaan HTML-öista osanottajien nimistä
let html ='<ol>';
for (let i = 0; i < nof_p; i++)
{
    html += '<li>';
    html += participants[i];
    html += '</li>';
}
html += '</ol>';

//lisätään generoitu html sivulle
let kohde = document.querySelector('#Kohde');
kohde.innerHTML = html