// Create a function that takes a string as its argument and returns the string in reversed order.

console.log("Hello")

function reverse(str) {
  let out = ""
  for (let i = str.length - 1; i >= 0; i--) {
    let letter = str[i]
    out += letter
    console.log(letter)
  }
  return out
}
console.log(reverse("Hello"))
