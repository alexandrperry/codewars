function disemvowel(str) {
  return str.split("").map(function(char){
  	if(['e','i','o','a','u','A','O','E','I','U'].indexOf(char)==-1){
    	return char;
    }
  }).join("");
}
