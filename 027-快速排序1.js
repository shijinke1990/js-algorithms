function quickSort(arr, left = 0, right = arr.length - 1) {
    const swap = function (arr, i, j) {
        const [a, b] = [arr[i], arr[j]]
        arr[i] = b
        arr[j] = a
    }

    const partition = function (arr, left, right) {
        const pivot = left
        let index = pivot + 1
        for (let i = index; i <= right; i++) {
            if (arr[i] < arr[pivot]) {
                if (index !== i) {
                    swap(arr, i, index)
                }
                index++
            }
        }
        swap(arr, pivot, index - 1)
        return index - 1
    }

    if (left < right) {
        const partitionIndex = partition(arr, left, right)
        quickSort(arr,left,partitionIndex-1)
        quickSort(arr,partitionIndex+1,right)
    }

    return arr


}

let array = [7, 5, 3, 8, 12, 1, 4, 16, 70, 6, 2, 10, 20, 9, 30]

console.log(quickSort(array).join(', '))