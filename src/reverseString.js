function reverseString(string) {
    let str;
    let count = 0;
    for (let i = string.length - 1; i >= 0; i--) {
        str += string[i];
    }
    return str;
}

export { reverseString };
