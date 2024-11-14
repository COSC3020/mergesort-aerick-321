function mergesort(array) {
    if (array.length < 2){
        return array;
    }
    
    while (array.length > 1){
        for (let size = 1; size <=array.length - 1; size = 2 * size) {
            for (let left = 0; left < array.length - 1; left += 2 * size){
               var mid = Math.floor((array.length)/2);
                let right = Math.floor(left + 2 * size - 1, array.length - 1);
                merge(array, left, mid, right)
            }
        }    
    }
    
    return array;
}

function merge(subarr, left, mid, right){
    let top = mid +1;
    while(left <= mid && top <= rigth){
        if (subarr[left] <= subarr[top]){
           left++;
        }
        else{
          let a = subarr[top];
            let b = top;
            for(let i = 0; b > left +1; i++){
                subarr[k] = subarr[k-1];
            }
            subarr[left] = b;
            left++;
            mid++;
            top++;
        }
        
    }
    return 
}
