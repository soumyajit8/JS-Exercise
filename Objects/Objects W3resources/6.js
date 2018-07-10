
Array.prototype.bubbleSort_algo = function() 
{
    var length = items.length;
    
    for(var i = (length - 1) ; i>=0 ; i--){

        for( var j = (length - i) ; j>0 ; j--){

            if(items[j] < items[j-1]){

                var temp = items[j];
                items[j] = items[j-1];
                items[j-1] = temp;
            }
        }
    }
};

console.log([6,4,0,3,-2,-1].bubbleSort_algo());