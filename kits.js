// 随机获取整数的方法：
kits.randomInt=function(n,m){
    return Math.floor(Math.random()*(m-n+1)+n);
}

// kits.randomInt(n,m);


// 随机获取rgb颜色的方法：
kits.randomRGB=function(){
    var r=kits.randomInt(0,255);
    var g=kits.randomInt(0,255);
    var b=kits.randomInt(0,255);
    return 'rgb('+r+','+g+','+b+')';
    

    

    // abc 'abc' + number + 'abc'
}


// 封装随机十六位进制颜色的方法：
kits.randomHexColor=function(){
    var color=['#'];
    for(var i=0;i<6;i++){
        var r=Math.floor(Math.random()*16).toString(16);
        color.push(r);
    }
    return color.join('');
}
// kits.randomHexColor(2,3,4,5,6,7);