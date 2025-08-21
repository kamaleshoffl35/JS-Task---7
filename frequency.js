function frequency(arr){
    let freq = {}
    for(i=0;i<arr.length;i++){
        let element = arr[i]
        if(freq[element] === undefined){
            freq[element] = 1

        }
        else{
            freq[element]++
        }
    }
    return freq
}
let arr = [1,1,1,2,3,3,3]
console.log(frequency(arr))