
class PredictiveModel {
    constructor() {
        this.slope = 0;
        this.intercept = 0;
        this.learningRate = 0.01;
        this.iterations = 1000;
    }

    train(data) {
        let m = this.slope;
        let b = this.intercept;
        const lr = this.learningRate;
        const n = data.length;

        for (let i = 0; i < this.iterations; i++) {
            let dm = 0;
            let db = 0;

            data.forEach(point => {
                const x = point.input;
                const y = point.output;
                const pred = m * x + b;
                const error = pred - y;
                dm += (2 / n) * error * x;
                db += (2 / n) * error;
            });

            m -= lr * dm;
            b -= lr * db;
        }

        this.slope = m;
        this.intercept = b;
    }

    predict(x) {
        return this.slope * x + this.intercept;
    }
}
