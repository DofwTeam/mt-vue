module.exports = function awaitWrap(promise) {
    return promise.then(
        result => [null, result],
        err => [err, null]
    )
}
