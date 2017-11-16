function merge(list) {
    var nList = Array.from({length:4}).fill(null), n = 0,isMerged = false;
    for (var x = 0; x < 4; x++) {
      if (list[x] !== null) {
        if (+list[x] === +nList[n - 1] && !isMerged) {
          nList[n - 1] *= 2;
          isMerged = true
        } else {
          nList[n++] = +list[x]
        }
      }
    }
    console.log(list , '=>' , nList)
    return nList
  }

// merge([4,4,4,null])
// merge([4,4,4,4])
// merge([4,4,null,4])
// merge([4,null,4,null])
// merge([null,null,4,null])
// merge([2,null,4,null])

function moveAndMerge(list, reverse = false) {
    
    var length = 4;

    var n = reverse ? length - 1 : 0;
    var nList = new Array(length).fill(null);
    var isMerged = false;
    if (!reverse) {
        for (var x = 0; x < length; x++) {
            if (list[x] !== null) {
                if (+list[x] == +nList[n - 1] && !isMerged) {
                    nList[n - 1] *= 2;
                    isMerged = true;
                } else {
                    nList[n++] = +list[x];//把新的字符串变成数字，防止触发动画
                }
            }
        } //把非null的tile紧密排列,合并

    } else {
        for (var x = length - 1; x > -1; x--) {
            if (list[x] !== null) {
                if (list[x] == nList[n + 1] && !isMerged) {//合并动作
                    nList[n + 1] *= 2;
                    isMerged = true
                } else {
                    nList[n--] = +list[x];//把新的字符串变成数字，防止触发动画
                }
            }
        }

    }
    console.log(list , '=>' , nList)
    return nList;
}
moveAndMerge([4,4,4,null],true)
moveAndMerge([null,null,4,8],true)
moveAndMerge([4,2,null,4],true)
moveAndMerge([4,null,4,null])
moveAndMerge([null,null,4,null])
moveAndMerge([2,null,4,null])