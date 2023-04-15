var twoSum = function (nums, target) {
  let   hash = {};
  // for(let i=0;i<nums.length;i++)
  // {
  //    if(hash[target - nums[i]]>=0)
  //     return([hash[target - nums[i]],i])
  //    else 
  //     hash[nums[i]] = i
  // }   
  let ans;
  nums.forEach((value,index)=>{(hash[target - value] >= 0)?(ans = [hash[target-value],index]):hash[value]=index;
  })  
  return ans
};