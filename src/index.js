module.exports = function check(str, bracketsConfig) {

  var stack = [];
  var isClosedBracket = false;
  var identicalBrackets = false;
  var n = 0;

  for (let i=0; i<str.length; i++){
      isClosedBracket = false;
      identicalBrackets = false;

      for (let j=0; j<bracketsConfig.length; j++){
          if ((str[i] == bracketsConfig[j][0]) && (str[i] == bracketsConfig[j][1])) {
             identicalBrackets = true;
             n=j;
          }
          else{
            if (str[i] == bracketsConfig[j][1]){
               isClosedBracket = true;
               n=j;
            }
          }
      }

      if (identicalBrackets){
        if (stack.length == 0){
            stack.push(str[i]);
        }
        else{
        if (bracketsConfig[n][0] == stack[stack.length-1]){
           stack.pop();
        }
        else{
            stack.push(str[i]);}}
      }
      else{
          if (isClosedBracket){
             if (stack.length == 0) {
                 return false;
             }
             else {
                if (bracketsConfig[n][0] == stack[stack.length-1]){
                    stack.pop();
                }
                else {
                     return false;
                }
             }
          }
          else {
               stack.push(str[i]);
          }
      }
  }

  if (stack.length == 0) {
   return true;
  }
  else{
    return false;
  }
}


