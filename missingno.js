function missing(arr, n){
    let expectsum = (n*(n+1))/2
    let actualsum = 0
    for(i=0;i<arr.length;i++){
        actualsum+= arr[i]
    }
    return expectsum-actualsum
}
console.log(missing([1,2,4,5],5))