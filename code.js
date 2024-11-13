function mergesort(array, x) {
    if (array.length < 2){
        return array;
    }
    
    while (array.length > 1){
        for (let left = 0; left < x - 1; left += 2 * array.length){
           var mid = Math.floor((array.length)/2);
            let right = Math.floor(left + 2 * array.length - 1, x - 1);
            merge(array, left, mid, right);
        }
    }
    
    return array;
}

function merge(leftarr, rightarr){
    let result =[];
    let top = 0;
    let end = array.length -1;
    result.push(top);
    result.push(end);
    while(leftarr > 1 && rightarr >1){
        if (top.leftarr < top.rightarr){
            top = leftarr.pop;
            result.push(top);
        }
        else{
            top = rightarr.pop;
            result.push(top);
        }
    }
    return result;
}
