window.onload = function ( ){ 
let who = ['The dog','My grandma','His turtle','My bird'];/* 4 elementos*/
let action = ['ate','peed','crushed','broke'];/* 4 elementos */
let what = ['my homework', 'the keys', 'the car'];/* 3 elementos */
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];/* 5 elementos */

let mensaje =  who[(Math.floor(Math.random() * who.length))] + " " +
               action[(Math.floor(Math.random() * action.length))] + " " +
               what[(Math.floor(Math.random() * what.length))] + " " +
               when[(Math.floor(Math.random() * when.length))]

document.querySelector("#mensaje").innerHTML=mensaje;
}