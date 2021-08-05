function insertionSort(array) {
    let len = array.length
    let current, preIndex
    for (let i = 1; i < len; i++) {
        current = array[i]
        preIndex = i - 1
        while (preIndex >= 0 && current < array[preIndex]) {
            array[preIndex + 1] = array[preIndex]
            preIndex--
        }
        array[preIndex + 1] = current
    }
    return array
}
