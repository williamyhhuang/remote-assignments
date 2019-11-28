function delayResult(n1, n2, delayTime){
    var result = n1 + n2;
    if (n1>0 && n2>0){
        setTimeout(function (){console.log(result)}, delayTime);
    }else {
        setTimeout(function (){window.alert(result)}, delayTime);    
    }
};

delayResult(4,5, 3000);
delayResult(-5,10, 2000);