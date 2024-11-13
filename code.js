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

function merge(arr, left, mid, right){
    
    while(left > 1 && right >1){
        if (left < right){
           
        }
        else{
           
        }
    }
    return 
}
