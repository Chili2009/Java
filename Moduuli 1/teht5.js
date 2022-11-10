/* 5.*/
'use strict';

let v = parseInt(prompt("Anna vuosiluku"));
/* let kohde = document.querySelector('#kohde').innerHTML */
if ((v % 4 == 0 && v % 100 != 0) || (v % 400 == 0))
{
    kohde.innerHTML = "Vuosi on karkausvuosi";
}
else
{
    /* kohde.innerHTML = "vuosi ei ole karkausvuosi"; */
    document.querySelector('#kohde').innerHTML
}