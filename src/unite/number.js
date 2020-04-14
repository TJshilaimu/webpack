import isPrime from "./isPrime";

export default class Number1 {
    constructor(duration = 500) {
        this.duration = duration;
        this.callback = null,
            this.number = 1,
            this.timer = null
    }
    start() {
        //     console.log('11')
        // if (this.timer) {
        //     return
        // }
        // console.log('12')
        //    if (this.timerId) {
        //             return;
        //         }
        this.timer = setInterval(()=> {
            this.callback && this.callback(this.number, isPrime(this.number))
            this.number++;
        }, this.duration)
                // this.timerId = setInterval(function () {
                //     this.onNumberCreated && this.onNumberCreated(this.number, isPrime(this.number))
                //     this.number++;
                // }, this.duration)
        // if (this.timerId) {
        //     return;
        // }
        // this.timerId = setInterval(() => {
        //     this.onNumberCreated && this.onNumberCreated(this.number, isPrime(this.number))
        //     this.number++;
        // }, this.duration)
    }
    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }
}