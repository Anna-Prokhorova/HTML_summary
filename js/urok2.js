/**
 * AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 */

function foo1(value) {
	//value.split('').reduce((x, e) => {x = e},'')
  value = value + '.'
  let result = '';
  let count = 1;
  let prev = value[0];
  for (let i=1; i < value.length; i++) {
  	if (value[i] == prev) {
    	count += 1;
    }
    else {
    	if (count != 1) {
      	result += prev + count;
      } else {
      	result += prev
      }
      prev = value[i];
      count = 1;
    }
  } 
  return result
}

function foo(value) {
	let count = 0;
  let mainLetter = value[0];
 	value = value + '.'
	return value.split('').reduce((x, e, i, a) => {
  		if (mainLetter == e) {
      	count += 1;
      } else {
      	x += (count > 1) ? mainLetter + count : mainLetter;
        count = 1;
        mainLetter = e;
      }
      return x
      
      },'')
}


console.log(foo('ABBBCCC'));
console.log(foo('A'));
console.log(foo('ABCDEF'));