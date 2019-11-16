function calculate(args){ 
    let result;
    if(args.op==="+"){ 
        result=args.n1+args.n2;
    }else if(args.op==="-"){
        result=args.n1-args.n2;
    }else{
    result="Not supported";
    }
    return result; 
}
// First way
function func(n1,n2, op) {
    this.n1 = n1;
    this.n2 = n2;
    this.op = op;
} 

console.log (calculate(new func(3,4,'+')));

// Second way
var keys = ['n1','n2','op'];
var values = [4,5,'+'];

function toObject(keys, values) {
    var result = {};
    for (var i = 0; i < keys.length; i++)
         result[keys[i]] = values[i];
    return result;
}

console.log(calculate(toObject(keys, values)));