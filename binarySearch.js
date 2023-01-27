let nr = [5, 7, 9, 13, 17, 20, 23];

function binarySearch (array, target){
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (target === array[middle]) {
            return middle;
        }else if (target < array[middle]){
            right = middle - 1;
        }else{
            left = middle + 1;
        }
    }
    return - 1;
}

console.log(binarySearch(nr, 17));
console.log(binarySearch(nr, 20));
