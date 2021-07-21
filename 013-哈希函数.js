function hashFunc(str, max) {
    let hashCode = 0

    for (let i = 0; i < str.length; i++) {
        hashCode = 37 * hashCode + str.charCodeAt(i)
    }

    hashCode = hashCode % max
    return hashCode

}

console.log(hashFunc("c",7))
console.log(hashFunc("wwwwwwwww1abc",7))
console.log(hashFunc("ffrabc",7))
console.log(hashFunc("2245abc1a",7))
console.log(hashFunc("awqabc我去000001",7))
console.log(hashFunc("dfgjjkabc啊啊",7))