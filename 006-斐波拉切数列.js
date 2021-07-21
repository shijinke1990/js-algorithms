/**
 * 普通递归
 */

function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

/**
 * 改进递归
 */
function fibonacci2(n) {
    function fib(n, v1, v2) {
        if (n === 1) {
            return 1
        }
        if (n === 2) {
            return v1
        } else {
            return fib(n - 1, v1 + v2, v1)
        }
    }
    return fib(n, 1, 1)
}

/**
 * 使用闭包改进递归
 */

const fibonacci3 = function () {
    const memo = [0, 1]
    const fib = function (n) {
        if (memo[n] === undefined) {
            return fib(n - 2) + fib(n - 1)
        }
        return memo[n]
    }
    return fib
}()


/**
 * 循环
 */
function fibonacci5(n) {
    let n1 = 1; n2 = 1;
    for (let i = 2; i < n; i++) {
        [n1, n2] = [n2, n1 + n2]
    }
    return n2
}

process.stdin.on("data", (val) => {
    console.log(fibonacci5(parseInt(val)))
})


