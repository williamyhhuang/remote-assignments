function delayResult(n1, n2, delayTime, callback){
    var result = n1+n2;
    window.setTimeout(function (){callback(result)}, delayTime);
};

delayResult(4,5, 3000, function(result){
    console.log(result);
});

delayResult(-5,10, 2000, function(result){
    window.alert(result);
});