/* var nom:string = "amine";
console.log(nom);

function info(){
    for (var i=0;i<10;i++)
    {
        console.log("i= " + i)

    }
    console.log("finaly i =" + i)
}
info(); 

function somme (x:number , y:number)
{
    console.log(x+y);

}

somme (10,20);


let somme = (x,y) =>console.log(x+y);
somme(1,2);

let tab:any[]=[12,"Angular",true,'a'];
for (var i=0;i<tab.length;i++)
{
    console.log(tab[i]);
}
*/

import{cours,Etudiant} from "./modeles";

function  displaycours(c :cours) {
    console.log(c.nom + " " + c.volume);
}

displaycours(
   {
       'nom': 'Angular';
       'volume':30
       } 
);
