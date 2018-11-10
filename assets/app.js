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
console.log(reverse("Hello World"))
console.clear()

// Create a function that takes an array and a string as arguments and return the index of the string.

function findIndex(arr, str) {
  for (let i = 0; i < arr.length; i++) {
    let string = arr[i]
    console.log(string)
    if (str == string) {
      return i
    }
  }
}
console.log(findIndex(['a', 'b', 'c', 'd', 'e', 'f'], 'f'))
console.clear()

// // Create a function that takes a string and returns the word count. The string will be a sentence.

function wordCount(str) {
  // let out = str.split(' ')
  // console.log(out)
  // return out.length
  return str.split(' ').length
}
console.log(wordCount("Is this easy mode"))
console.clear()
