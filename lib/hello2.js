class Hello {
    constructor(v) {
        this.value = v;
    }
    hello() {
        return ("Hello, " + this.value);
    }
}

module.exports = {
    Hello,
}
