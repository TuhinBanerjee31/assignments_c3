/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let res = numbers[0]
    numbers.map(n => {
        if(res<n) res= n
    })

    return res
}

// console.log(findLargestElement([-5, -10, -2, -8]))
// console.log(findLargestElement([3.5, 7.2, 2.1, 9.8, 1.9]))

module.exports = findLargestElement;