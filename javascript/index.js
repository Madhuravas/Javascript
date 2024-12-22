let loaderEl = document.getElementById("Loader")
let MainCardEl = document.getElementById("MainCard")
loaderEl.style.display = "block"
MainCardEl.style.display = "none"
// MainCardEl.style.backgroundColor = "red"

setTimeout(() =>{
  loaderEl.style.display = "none"
  MainCardEl.style.display = "inline-block"
},2000)


var expect = function(val) {

  let toBe = () =>{
      return function(num){
          if(num === val){
              return true
          }throw "Not Equal"}
  }

  let notToBe = () =>{
      return function(num){
          if(num !== val){
          return true
          }throw "Equal"}
  }

  return {toBe: toBe(), notToBe: notToBe()}

};

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5)); 