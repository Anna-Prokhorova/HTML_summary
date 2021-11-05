function    getAnagram(list) {
    let bigmas = [];
    list.sort();
    for (let i = 0; i < list.length-1; i++){
        let minimas = [];
        for (let j = i+1; j < list.length; j++){
            if (list[i].split('').sort().join('') == list[j].split('').sort().join('')){
                minimas.push(list[i],list[j])
                bigmas.push(minimas)
            }
      }
    }
    return bigmas
}

function anagram1(list) {
    let bigmas = [];
    list.sort().sort((a,b) => b.length - a.length);
    for (let first in list){
        let minimas = [];
        for (let second in list){
            if ((list[first].split('').sort().join('') == list[second].split('').sort().join(''))&&(first!=second)){
                minimas.push(list[first],list[second])
                bigmas.push(minimas)
                //break
            }
        }
    }
    return bigmas
}

function anagram(list) {
    return list.map(
        (item,index,arr)=>{
           return arr.filter((e,i,a) => e.split('').sort().join('') == item.split('').sort().join(''))
        }
    ).sort().filter((x,i) => (x.length > 1) && (i % 2 == 0))
}
  
  const inputList = [
      'кот', 'пила', 'барокко',
      'стоп', 'ток', 'кошка',
      'липа', 'коробка', 'пост',
  ];
  
 
  console.log(anagram(inputList));