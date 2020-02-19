function paddLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(padding + "has wrong");
}
try {
    padLeft('hello world', false);
}
catch (err) {
    // console.log(err)
}
console.log('have catching wrong');
