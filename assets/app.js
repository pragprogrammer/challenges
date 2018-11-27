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
console.clear()

// Create a function that takes two strings as arguments and returns the number of times the first string is found in the second string.

function countInstance(str1, str2) {
  let out = 0
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i]
    if (str1 === char) {
      out++
    }
  }
  return out
}
console.log(countInstance("a", "edabaait"))
console.clear()

// Create a function that takes an array of numbers and returns the smallest number in the set.

function smallestNum(arr) {
  let out = arr[0]
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i]
    if (value < out) {
      out = value
    }
  }
  return out;
}
console.log(smallestNum([0.4356, 0.8795, 0.5435, -0.9999]))
console.clear()

// Create a function that takes an array of numbers and returns only the even values.

function onlyEven(arr) {
  let out = []
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i]
    if (value % 2 == 0) {
      out.push(value)
    }
  }
  return out
}
console.log(onlyEven([43, 65, 23, 89, 53, 9, 6]))
console.clear()

// Create a function that takes an array of names and returns an array with the first letter capitalized.

function capitalize(arr) {
  let out = []
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i]
    out.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  }
  return out
}
console.log(capitalize(["samuel", "MABELLE", "letitia", "meridith"]))
console.clear()

// Create a function that takes an array representation of a Minesweeper board, and returns another board where the value of each cell is the amount of its neighbouring mines.


// if (row.length > 0) {
//   for (let j = 0; j < row.length; j++) {
//     let value = row[j]
//     if (value == 1) {
//       value = 9
//       out.map(value);
//     }
//     out.push(value)
//   }
// }


let mineField = [
  [0, 1, 0, 1],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]

function revalueMines(arr) {
  let out = []
  for (let i = 0; i < arr.length; i++) {
    let row = arr[i]
    let newRow = row.map(x => {
      if (x == 1) {
        x = 9
      }
      return x
    })
    out.push(newRow)
  }
  mineSweeper(out)
}

function mineSweeper(arr) {
  let newMinefield = arr
  let out = []
  let startIndex = {
    row: 0,
    col: 0
  }
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    let row = arr[i]
    startIndex.row = i
    if (row.length > 0) {
      for (let j = 0; j < row.length; j++) {
        let value = row[j]
        startIndex.col = j
        if (value != 9) {
          let horizontal = rowChecker(newMinefield, startIndex)
          counter += horizontal
          let verticle = columnChecker(newMinefield, startIndex)
          counter += verticle
        }
      }
    }
  }
  return out
}
function rowChecker(arr, position) {
  debugger
  let key = {
    row: position.row,
    col: position.col
  }
  let counter = 0
  if (key.col < arr.length && arr[key.row][key.col + 1] == 9) {
    counter++
  }
  if (key.col > 0 && arr[key.row][key.col - 1] == 9) {
    counter++
  }
  return counter
}

function columnChecker(arr, position) {
  let key = {
    row: position.row,
    col: position.col
  }
  let counter = 0
  if (key.row < arr.length && arr[key.row + 1][key.col] == 9) {
    counter++
  }
  if (key.row > 0 && arr[key.row - 1][key.col] == 9) {
    counter++
  }
  return counter
}
function diagonalChecker(value) {

}
console.log(revalueMines(mineField))

