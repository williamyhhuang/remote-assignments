function twoSum (nums, target) {
    for (i = 0; i < nums.length; i+=1) {
        var left;
        var answer='';
        left = target - nums[i];
        if (nums.indexOf(left) > -1 && nums.indexOf(left) != i ) {
            answer = '[' + i + ', ' + nums.indexOf(left) + ']'; 
            return answer;
        }
    }
}
