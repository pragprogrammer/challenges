// Create a function that takes a string as its argument and returns the string in reversed order.

let testStr = "Hello"
let out = ""
function reverse(str) {
  for (let i = str.lenght; i > 0; i--) {
    let letter = str[i]
    out += letter
  }
  return out
}
console.log(out)