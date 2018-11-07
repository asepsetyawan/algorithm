
function QuicSort(originalArray)
{
    if (originalArray.length <= 1){
        return originalArray;
    }
    else {
        var left = [];
        var right = [];
        var newArray = [];
        var pivot = originalArray.pop();
        var length = originalArray.length;
        for (i = 0; i < length; i++) {
            if (originalArray[i] <= pivot) { 
                left.push(originalArray[i]);
            }
            else {
                right.push(originalArray[i])
            }
        }

        return newArray.concat(QuicSort(left), pivot, QuicSort(right));
    }
}

var array = [10,25,17,20,30,40,35];
console.log(array)
console.log(QuicSort(array));