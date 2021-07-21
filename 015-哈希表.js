class HashTable {
    storage = []
    count = 0
    limit = 7

    hashFunc(str, size) {
        let hashCode = 0
        for (let s of str) {
            hashCode = hashCode * 37 + s.charCodeAt(s[0])
        }
        return hashCode % size
    }

    getPrime(num) {
        while (!this.isPrime(num)) {
            num++
        }
        return num
    }

    put(key, value) {
        const index = this.hashFunc(key, this.limit)
        let bucket = this.storage[index]
        if (bucket === null || bucket === undefined) {
            bucket = []
            this.storage[index] = bucket
        }
        for (let i = 0; i < bucket.length; i++) {
            const tuple = bucket[i]
            if (tuple[0] === key) {
                tuple[1] == key
                return
            }
        }
        bucket.push([key, value])
        this.count += 1

        if (this.count > this.limit * 0.75) {
            const primeNum = this.getPrime(this.limit * 2)
            this.resize(primeNum)
        }


    }

    get(key) {
        let index = this.hashFunc(key, this.limit)
        const bucket = this.storage[index]
        if (bucket === null) {
            return null
        }
        for (let i = 0; i < bucket.length; i++) {
            const tuple = bucket[i]
            if (tuple[0] === key) {
                return tuple[1]
            }
        }
        return null
    }

    remove(key) {
        const index = this.hashFunc(key, this.limit)
        const bucket = this.storage[index]
        if (bucket == null) return null
        for (let i = 0; i < bucket.length; i++) {
            const tuple = bucket[i]
            if (tuple[0] === key) {
                bucket.splice(i, 1)
                this.count--
                if (this.limit > 7 && this.count < this.limit * 0.25) {
                    const primeNum = this.getPrime(Math.floor(this.limit / 2))
                    this.resize(primeNum)
                }
            }
            return tuple[1]
        }
        return null
    }

    resize(newLimit) {
        let oldStorage = this.storage
        this.limit = newLimit
        this.count = 0
        this.storage = []

        oldStorage.forEach((bucket) => {
            if (bucket == null) {
                return
            }
            for (let i = 0; i < bucket.length; i++) {
                let tuple = bucket[i]
                this.put(tuple[0], tuple[1])
            }
        })
    }


    isEmpty() {
        return this.count === 0
    }

    size() {
        return this.count
    }




}

const hashTable = new HashTable()

hashTable.put('sjk', '施锦科')
hashTable.put('wch', '吴成慧')

console.log(hashTable)

console.log(hashTable.get('sjk'))
hashTable.remove('wch')
console.log(hashTable.get('wch'))