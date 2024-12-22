import {upperCase} from 'upper-case';

function greet(name){
   console.log(upperCase(name))
}

greet("Madhu");

module.exports = greet;