function nextSquare(num) {
    var root
    var nextRoot

    if(Math.sqrt(num)%1 === 0) {
        root = Math.sqrt(num)
        nextRoot = root + 1
    }
    else {
        return -1;
    }
    return nextRoot * nextRoot
}

console.log(nextSquare(144))