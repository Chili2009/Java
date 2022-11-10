
'use strict'

console.log('I have awakened!');
document.querySelector('#otsalohko').innerHTML = "otsis"

/*
for (let i = 0; i < 10; i++) {
  console.log(i)
}

function foobar(x, y, z) {
  console.log(x, y, z)
  return 12
}
*/
let kohde = document.querySelector('#kohde')






/* t1 */
/*
'use strict';

let nimi = prompt('Type your name')
document.querySelector('#target').innerHTML = 'Hello, ' + nimi + '!';
*/

/*t2 */
/*
let eka = parseInt(prompt("Anna eka"))
let toka = parseInt(prompt("Anna toka"))
let kolmas = parseInt(prompt("Anna kolmas"))

let summa = eka + toka + kolmas
let tulo = eka * toka * kolmas
let ka = summa / 3

kohde.innerHTML =
    'summa=' + summa +
    ', tulo=' +tulo+
    ',keskiarvo=' +ka;
*/
/*
let v =parseInt(prompt('Anna vuosiluku: '));

if ((v % 4 == 0 && v % 100 != 0) || (v % 400 == 0))
{
  kohde.innerHTML = 'vuosi on karkausvuosi';
}
else
{
kohde.innerHTML = 'vuosi ei ole karkausvuosi';
}

 */
/* t8 */
let alku = parseInt(prompt("Anna alkuvuosi"));
let loppu = parseInt(prompt("Anna loppuvuosi"));

let abc = '<ul>';

for (let v= alku; v <= loppu; v++)
{
    if ((v % 4 == 0 && v % 100 != 0) || (v % 400 == 0))
 {
  abc += '<li>';
  abc += v;
  abc += '</li>';
 }
}
abc += '</ul>';
kohde.innerHTML = abc