class ArrayList {
    array = []
    insert(item) {
        this.array.push(item)
    }
    toString() {
        return this.array.join('-')
    }

    swap(m, n) {
        const temp = this.array[m]
        this.array[m] = this.array[n]
        this.array[n] = temp
    }

    bubbleSort() {
        const array = this.array
        if (array.length < 2) {
            return array
        }
        for (let i = array.length - 1; i >= 1; i--) {
            for (let j = 0; j < i; j++) {
                if (array[j] > array[j + 1]) {
                    const t = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = t
                }
            }
        }
        this.array = array
    }

    selectionSort() {
        const length = this.array.length
        for (let i = 0; i < length - 1; i++) {
            let min = i
            for (let j = min + 1; j < length; j++) {
                if (this.array[j] < this.array[min]) {
                    min = j
                }
            }
            this.swap(min, i)
        }
    }

    insertionSort() {
        const length = this.array.length
        for (let i = 1; i < length; i++) {
            let j = i
            let temp = this.array[i]

            while (j > 0 && this.array[i] < this.array[j - 1]) {
                this.array[j] = this.array[j - 1]
                j--
            }


        }




    }




}

const list = new ArrayList()



let t1 = new Date().getTime()
list.selectionSort()
let t2 = new Date().getTime()

// let t3 = new Date().getTime()
// list.bubbleSort()
// let t4 = new Date().getTime()

//console.log(t2-t1)
console.log(list)


