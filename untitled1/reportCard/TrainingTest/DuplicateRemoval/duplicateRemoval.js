function duplicateRemoval(arr) {
    return Array.from(new Set(arr));
}

let arr = ['s', 'a', 's', 'b', 'a', 1, '1', 1];
console.log(duplicateRemoval(arr));