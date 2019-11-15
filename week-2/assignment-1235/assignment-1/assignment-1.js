function max(a,b,...theArgs) {
   var index = [a,b,...theArgs];
   var max_number = index[0];
   for (var i=1;i<index.length; i++){
        if (index[i]>max_number){
           max_number = index[i]; 
        }  
   }
   return max_number;
}
