class SetClass {
    items = {}

    add(value) {
        if (this.has(value)) {
            return false
        } else {
            this.items[value] = value
            return true
        }
    }

    has(value) {
        return this.items.hasOwnProperty(value)
    }

    remove(value) {
        if (this.has(value)) {
            delete this.items[value]
            return true
        } else {
            return false
        }
    }

    clear() {
        this.items = {}
    }

    size() {
        return Object.keys(this.items).length
    }

    get values() {
        return Object.keys(this.items)
    }

    union(otherSet) {
        const unionSet = new SetClass()
        const values = this.values
        values.forEach(val => {
            unionSet.add(val)
        })

        const otherSetValues = otherSet.values
        otherSetValues.forEach(val => {
            unionSet.add(val)
        })
        return unionSet
    }

    /**
     * 交集
     * @param {*} otherSet 
     */
    intersection(otherSet) {
        const intersectionSet = new SetClass()
        for (let item in this.items) {
            if (otherSet.has(item)) {
                intersectionSet.add(item)
            }
        }
        return intersectionSet
    }

    //差集
    difference(otherSet) {
        const differenceSet = new SetClass()
        differenceSet.items = this.items
        for (let item in this.items) {
            if (otherSet.has(item)) {
                differenceSet.remove(item)
            }
        }
    }

    //子集
    subset(otherSet) {
        //判断this集合 是否是 otherSet 的子集
        for (let item in this.items) {
            if (!otherSet.has(item)) {
                return false
            }
        }
        return true
    }

}

const s1 = new SetClass()
s1.add('11')
s1.add('22')
s1.add('33')
s1.add('44')
const s2 = new SetClass()
s2.add('11')
console.log(s2.subset(s1))


