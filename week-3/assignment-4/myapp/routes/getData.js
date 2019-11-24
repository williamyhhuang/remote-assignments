const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    const index = req.query.number;
    var result;

    if (typeof index === 'undefined'){
        result = 'Lack of Parameter';       
    }else if (isNaN(parseInt(index)) || Number(index)%1 !== 0 || parseInt(index)<0){
        result = 'Wrong Parameter';
    }else if (parseInt(index)>0 && Number(index)%1 === 0 ) {
        var sum = 0;
        for (let i = 1; i <= index; i+=1){
            sum += i;
        }
        result = req.query.number + ' is : '+ sum ; 
    }

    res.render('getData',{result: result});
})

module.exports = router;