// 返回条件为真的新数组
Array.prototype.myarray = function (cb) {
    // TODO：待补充代码
    var resArr = new Array();

    cb.forEach((item) => {
        console.log(item);
    })

    return resArr;
};
