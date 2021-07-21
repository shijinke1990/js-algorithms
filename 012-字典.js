class Dictionary {
    items = {}

    has(key) {
        return this.items.hasOwnProperty(key)
    }

    set(key, value) {
        this.items[key] = value
    }

    get(key) {
        if (!this.has(key)) return false
        return this.has(key) ? this.items[key] : undefined
    }

    remove(key){
        if (!this.has(key)) return false
        delete this.items[key]
        return true
    }

    get size(){
        return  this.keys.length
    }

    get keys(){
        return Object.keys(this.items)
    }

    get values(){
        return Object.values(this.items)
    }

    clear(){
        this.items = {}
    }

}

const dict = new Dictionary()

dict.set(1,111111)
dict.set(2,222222)
dict.set(3,333333)
dict.set(4,444444)
dict.set(5,555555)


console.log(dict)
console.log(dict.get(5))
console.log(dict.remove(1))
console.log(dict)
console.log(dict.size)
console.log(dict.keys)
console.log(dict.values)