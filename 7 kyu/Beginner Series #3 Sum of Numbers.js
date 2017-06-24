function GetSum( a,b )
{
   let max = Math.max(a,b);
   let min = Math.min(a,b);
   let  count = 0;
   while(min <= max){
   count+=min++;
   }
   return a === b?a:count;
   
}