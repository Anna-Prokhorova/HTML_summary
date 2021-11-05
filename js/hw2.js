function tree1(height){
    let str = '';
    let space = height-2;
    let star = 1;
    while (space>=0){
        str += ' '.repeat(space) + '*'.repeat(star) + ' '.repeat(space) + '\n';
        space -= 1;
        star += 2;
    }
    space = height-2
    if (space >0){return str + ' '.repeat(space) + '|' + ' '.repeat(space)}
    else {return null}
    
}

function tree(height){
    return (height > 2) ? [...Array(height-1)].map((e,i) => {return' '.repeat((height-2)-i) + '*'.repeat(i*2+1) + ' '.repeat((height-2)-i) + '\n'}).join('') + ' '.repeat(height-2) + '|' + ' '.repeat(height-2) : null;
}

console.log(tree(20))