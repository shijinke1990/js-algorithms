function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let pivotIndex = Math.floor(arr.length / 2)
    const pivot = arr.splice(pivotIndex, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat([pivot],quickSort(right))


}

let array = [7, 5, 3, 8, 12, 1, 4, 16, 70, 6, 2, 10, 20, 9, 30]

console.log(quickSort(array).join(', '))