
exports.min = function min (array) {
    var result=0;
    if(array && Array.isArray(array) && array.length>1)
        result= Math.min(...array) || 0;
    return result;


    
    /*
    велосипед тут:
    var minimum=array[0];
    for(var i=1;i<array.length;i++)
   		if(minimum>array[i])
      	    minimum=array[i];
    */
}

exports.max = function max (array) {
    var result = 0;
    if(array && Array.isArray(array) && array.length>1 )
        result= Math.max(...array) || 0;
    return result;
        /*
    велосипед тут:
    var maximum=array[0];
    for(var i=1;i<array.length;i++)
   		if(maximum<array[i])
      	    maximum=array[i];
    */
}

exports.avg = function avg (array) {

    var result = 0;
    if(array && Array.isArray(array) && array.length>1 )
        result= array.reduce( ( p, c ) => p + c, 0 ) / array.length || 0;
    return result;
    /*
    велосипед тут:
    var average=array[0];
    for(var i=1;i<array.length;i++)
              average+=array[i];
    return average/array.length
    */
}
