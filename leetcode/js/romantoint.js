var romanToInt = function (s="MCMXCIV") {

    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D:500,
        M: 1000,
    }
    let ans = 0 
    for(i=s.length-1;i>=0;)
    { console.log(roman[s[i]],s[i])  
      if(ans>roman[s[i-1]])
      {
        ans-=roman[s[i]]  
        i--;
      }
      else{
        ans+=roman[s[i]]  
        i--;
      }
    }
    console.log(ans)
};
romanToInt();