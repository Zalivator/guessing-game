class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minimal = min;
        this.maximal = max;
    }

    guess() {
        this.middle = Math.round((this.maximal + this.minimal) / 2);
        return this.middle;
    }

    lower() {
        this.maximal = this.middle;
    }

    greater() {
        this.minimal = this.middle;
    }
}

module.exports = GuessingGame;
