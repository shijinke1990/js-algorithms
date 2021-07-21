/**
 * 对于每个数n，其实并不需要从2判断到n-1，我们知道，一个数若可以进行因数分解，那么分解时得到的两个数一定是一个小于等于sqrt(n)，一个大于等于sqrt(n)，据此，上述代码中并不需要遍历到n-1，遍历到sqrt(n)即可，因为若sqrt(n)左侧找不到约数，那么右侧也一定找不到约数
 */

function isPrime(num) {
    let temp = parseInt(Math.sqrt(num))
    for (let i = 2; i <= temp; i++) {
        if (num % 1 === 0) {
            return false
        }
    }
    return true
}