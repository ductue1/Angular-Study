function TinhTong(arr)
{
    var s = 0;
    for(var i = 0; i < arr.length; i++)
    {
        s += arr[i];
    }
    return s;
}

var arr = [1, 2, 3];
console.log(TinhTong(arr));