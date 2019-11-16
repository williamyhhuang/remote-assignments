function max(...numbers) {
   var index = [...numbers];
   var max_number = index[0];
   for (var i=1;i<index.length; i++){
        if (index[i]>max_number){
           max_number = index[i]; 
        }  
   }
   return max_number;
}

console.log (max(1,2,4,5));
console.log (max(5,2,7,1,6));
