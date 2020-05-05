const timerInput = process.argv.slice(2)

timerInput.sort((a, b) => {
    return a - b
})

for (let num of timerInput) {
    if (!Number.isInteger(Number(num))) {
        num
    } else if (Number(num) < 0) {
        num
    } else {
    setTimeout(() => {
        process.stdout.write('\x07')
    }, num)
  }
};
