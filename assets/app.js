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

// Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

function monthName(num) {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December']

  for (let i = 0; i < months.length; i++) {
    // let month = months[i]
    if (num > 0 && num < 13) {
      return months[num - 1]
    } else return 'Sorry not an Option'
    // if (num == i || num == i + 1) {
    //   return month
    // }
  }
}
console.log(monthName(1))
console.clear()

// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

function dasher(num) {
  let out = ''
  for (let i = 1; i <= num; i++) {
    out += '-'
  }
  return out
}
console.log(dasher(10))
console.clear()

// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.

function boolFlipper(bool) {
  let reverse = true
  if (bool !== true && bool !== false) {
    return "boolean expected"
  }
  if (bool == true) {
    reverse = false
    return reverse
  }
  if (bool == false) {
    reverse = true
    return reverse
  }
}
console.log(boolFlipper(false))