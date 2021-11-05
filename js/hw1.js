function sort(str){
    let collator = new Intl.Collator("ru");
    return str.split(' ').map(item => {item = item.split('').sort(collator.compare).join(''); return item[0].toUpperCase() + item.slice(1).toLowerCase()}).sort(collator.compare).join(' ')
}

console.log(sort('ж ё е д г в б а'))