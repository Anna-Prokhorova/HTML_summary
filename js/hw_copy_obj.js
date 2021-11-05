function copy(obj) {
    if (typeof obj != 'object') return 'Not an Object';
    let newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] == 'object' ? copy(obj[key]) : obj[key];
        }
    }
    return newObj;
}

let obj = { a:1, arr: ['hello', true] };
let obj1 = copy(obj);

obj1.arr[1] = false;
obj1.arr[0] = 'hi';

console.log(obj);
console.log(obj1);