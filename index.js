let firstName=true;
let str=`My name is ${firstName?"dev" : "yadav"}`;

let players=[];
let turn =Math.round(Math.random());

let board= [
["","",""],
["","",""],
["","",""]
];

const checkplayer =()=>
{
  let input1 =document.getElementById("p1");
  let input2 =document.getElementById("p2");
  
  let player1 =input1.value;
  let player2 =input2.value;
  
  if(isEmpty(player1)|| isEmpty(player2))
  {
  alert("Player name is required");
  return false;
  }
  return true;
}
const startGame = () => 
{
if(checkplayer()){}
else return;
  let input1 =document.getElementById("p1");
  let input2 =document.getElementById("p2");
  
  let player1 =input1.value;
  let player2 =input2.value;
  
input1.setAttribute("disabled",true);
input2.setAttribute("disabled",true);

let game=document.getElementById("game-container");
game.classList.remove("hide");
let turn1=document.getElementById("turn");
  turn1.classList.remove("hide");

players.push(player1);
players.push(player2);

document.getElementById('turn').innerHTML=players[turn%2]+"'s turn";

};
var count=0;
const handleclick= (el) =>
{
   if(checkplayer()){}
   else
   return;
   if(!iswinner()){
  if(el.innerHTML!=="")
  {
return;
  }
  el.innerHTML=turn%2===0?"X":"O";
  if(turn%2===0)
  el.classList.add("mystyle");
  turn++;
  count++;
  if(iswinner())
{
  document.getElementById("winner").innerHTML=players[(turn-1)%2]+" win the match";
  return;
}

  document.getElementById('turn').innerHTML=players[turn%2]+"'s turn";
  //console.log("clicked");
}
if(count===9)
{
  document.getElementById("winner").innerHTML='matchdrawn';
}
};

const iswinner= () => 
{

if((document.getElementById("00").innerHTML==='X' || document.getElementById("00").innerHTML==='O')&&document.getElementById("00").innerHTML===document.getElementById("01").innerHTML && document.getElementById("01").innerHTML===document.getElementById("02").innerHTML)
return true;
if((document.getElementById("10").innerHTML==='X' || document.getElementById("10").innerHTML==='O')&&document.getElementById("10").innerHTML=== document.getElementById("11").innerHTML && document.getElementById("11").innerHTML===document.getElementById("12").innerHTML)
return true;
if((document.getElementById("20").innerHTML==='X' || document.getElementById("20").innerHTML==='O')&&document.getElementById("20").innerHTML=== document.getElementById("21").innerHTML && document.getElementById("21").innerHTML===document.getElementById("22").innerHTML)
return true;

if((document.getElementById("00").innerHTML==='X' || document.getElementById("00").innerHTML==='O')&&document.getElementById("00").innerHTML===document.getElementById("10").innerHTML && document.getElementById("10").innerHTML===document.getElementById("20").innerHTML)
return true;
if((document.getElementById("01").innerHTML==='X' || document.getElementById("01").innerHTML==='O')&&document.getElementById("01").innerHTML=== document.getElementById("11").innerHTML && document.getElementById("11").innerHTML===document.getElementById("21").innerHTML)
return true;
if((document.getElementById("02").innerHTML==='X' || document.getElementById("02").innerHTML==='O')&&document.getElementById("02").innerHTML=== document.getElementById("12").innerHTML && document.getElementById("12").innerHTML===document.getElementById("22").innerHTML)
return true;

if((document.getElementById("00").innerHTML==='X' || document.getElementById("00").innerHTML==='O')&&document.getElementById("00").innerHTML===document.getElementById("11").innerHTML && document.getElementById("11").innerHTML===document.getElementById("22").innerHTML)
return true;
if((document.getElementById("20").innerHTML==='X' || document.getElementById("20").innerHTML==='O')&&document.getElementById("20").innerHTML=== document.getElementById("11").innerHTML && document.getElementById("11").innerHTML===document.getElementById("02").innerHTML)
return true;

return false;
};
const isEmpty = (value) => !value || !value.trim();
/*
const resetGame = () =>
{

  count=0;
  for(let i=0;i<3;i++)
  for(let j=0;j<3;j++)
  {
    var s=String.fromCharCode(48+i);
    s+=String.fromCharCode(48 +j);
    document.getElementById(s).innerHTML='';
  }
  let input1 =document.getElementById("p1");
  let input2 =document.getElementById("p2");
  
 
  input1.setAttribute("disabled",false);
  input2.setAttribute("disabled",false);
  
  let game=document.getElementById("game-container");
  game.classList.add("hide");

  let turn1=document.getElementById("turn");
  turn1.classList.add("hide");

}*/