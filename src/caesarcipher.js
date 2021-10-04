const arr = "abcdefghijklmnopqrstuvwxyz";

function cipher(k, string) {
    if (typeof string === "string") {
        let str = string.toLowerCase();
        let res = "";
        for (let i = 0; i < str.length; i++) {
            let c = str[i];
            let index = arr.indexOf(c);
            if (index != -1) {
                let newindex = (index + k + 26) % 26;
                res += arr[newindex];
            } else {
                res += c;
            }
        }
        return res;
    }
}

function decipher(k, string) {
    if (typeof string === "string") {
        let str = string.toLowerCase();
        let res = "";
        for (let i = 0; i < str.length; i++) {
            let c = str[i];
            let index = arr.indexOf(c);
            if (index != -1) {
                index = (index - k + 26) % 26;
                res += arr[index];
            } else {
                res += c;
            }
        }
        return res;
    }
}

export default { cipher, decipher };
