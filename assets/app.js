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
console.clear()

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
  let min = arr[0]
  let max = arr[1]
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i]
    if (min < number) {
      if (max < number) {
        max = number
      }
    } if (min > number) {
      min = number
    }
  }
  return [min, max]
}
console.log(minMax([2, 3, 1, 5, 7, -1]))
console.clear()

// Create a function that takes an array of numbers. Return the largest number in the array.

function largestNum(arr) {
  let out = arr[0]
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i]
    if (value > out) {
      out = value
    }
  }
  return out;
}
console.log(largestNum([1, 100, 23, 10, 54, -12]))
console.clear()

// Create a function that accepts a string (of a persons first and last name) and returns a string with the first and last name swapped.

function shuffle(str) {
  return str.split(' ').reverse().join(' ')
}
console.log(shuffle("donald trump"))
console.clear()

// Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

function fourLetters(arr) {
  let out = []
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i]
    if (word.length == 4) {
      out.push(word)
    }
  }
  return out
}
console.log(fourLetters(["Ryan", "Kieran", "Jason", "Matt"]))
console.clear()

// Create a function to multiply all values in an array by the amount of values in that array.

function multiplyByLength(arr) {
  let out = []
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i]
    out.push(number * arr.length)
  }
  return out
}
console.log(multiplyByLength([2, 3, 1, 0]))
console.clear()

// Create a function that takes an array and return the most frequently occuring element contained within it.

function mostFrequent(arr) {
  let out = arr[0]
  let count = 1
  let tempValue = 0
  for (let i = 0; i < arr.length; i++) {
    tempValue = arr[i]
    let tempCount = 0
    for (let j = 0; j < arr.length; j++) {
      let value = arr[j]
      if (tempValue === value) {
        tempCount++
      }
      if (tempCount > count) {
        out = tempValue
        count = tempCount
      }
    }
  }
  return out
}
console.log(mostFrequent([1, 2, -3, true, false, 1, undefined, "yes", "yeah", "yup", 2]))
console.clear()

// Create a function that takes two strings and returns true if the first argument ends with the second argument; otherewise return false .

function endsWith(str1, str2) {
  let out = false
  let strLenght = str2.length - 1
  // debugger
  for (let i = str1.length - 1; i > 0; i--) {
    let letter = str1[i]
    for (let j = strLenght; j >= 0; j--) {
      let current = str2[j]
      if (letter == current) {
        out = true
        strLenght--
        break;
      }
      if (letter != current) {
        out = false
        return out
      }
      if (strLenght == 0) {
        return out
      }
    }
  }
  return out;
}
console.log(endsWith("convention", "tio"))

