function bubbleSort(array) {
    let length = array.length
    for (let i = length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                let t = array[j + 1]
                array[j + 1] = array[j]
                array[j] = t
            }
        }
    }
    return array
}

module.exports = bubbleSort