function dropElements ( arr , funct ) {
    let length = arr.length;
    for (let i = 0 ; i < length; i++) {
        if (funct (arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    console.log (arr)
}

dropElements ( [1,2,3,4] , function (n) {
    return n > 5;
})
