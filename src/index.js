module.exports = function check(str, bracketsConfig) {
  let arr = [];
    let counter = new Map();
    for (let i=0; i<bracketsConfig.length; i++){
        counter.set(bracketsConfig[i][0], bracketsConfig[i][1]);}
    for(let i=0; i<str.length; i++){
        if(counter.has(str[i])){
            if(str[i]===counter.get(str[i])){
                if(arr[arr.length-1] === str[i]) arr.pop();
                else arr.push(str[i]);
            } else arr.push(str[i])
        } else if (counter.get(arr[arr.length-1])===str[i]){
            arr.pop();
        }else if(str[i]!='|')return false;
    }
    if (arr.length ===0){
        return true
    }else return false;
}
