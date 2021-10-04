function Obj(ave, min, max, len) {
    this.average = ave;
    this.min = min;
    this.max = max;
    this.length = len;
}

function arrayanalysis(arr) {
    if (Array.isArray(arr)) {
        let min = arr[0];
        let max = arr[0];
        let total = 0;
        let ave = 0;
        let len = arr.length;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
            if (arr[i] > max) {
                max = arr[i];
            }
            total += arr[i];
        }
        ave = Math.round((total / len) * 10000) / 10000; // round
        return new Obj(ave, min, max, len);
    }
}

export default { arrayanalysis };
