function selectionSort(array) {
    const length = array.length
    for (let i = 0; i < length - 1; i++) {
        const minIndex = i
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        const t = array[minIndex]
        array[minIndex] = array[i]
        array[i] = t
    }
    return array
}