function getCount(string){
  return string.split("").reduce(function(vowelsCount,char){
    if (vowelsCount <0){
      return vowelsCount;
    }
    if (char === "a"){
      return ++vowelsCount;
    }
     if (char === "e"){
      return ++vowelsCount;
  }
    if (char === "i"){
      return ++vowelsCount;
  }
    if (char === "o"){
      return ++vowelsCount;
  }
    if (char === "u"){
      return ++vowelsCount;
  }
    else{
      return vowelsCount;
    }
  },0);
}    
  