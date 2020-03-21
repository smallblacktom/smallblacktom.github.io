// 1，找到所有Dom节点
var box = document.querySelector(".box");//找到容器盒子
var list = document.querySelector(".list");//找到移动盒子
var listli = document.querySelectorAll(".list li");
var len = document.querySelectorAll(".list li").length;//滑块个数
// var liWidth = document.querySelector(".list li").offsetWidth;//获取li的宽度
var page = document.querySelector(".page");//找到的分页容器
var pageli = document.querySelectorAll(".page li");//找到所有分页下标
var ltBtn = document.querySelector(".prev");//左按钮
var rtBtn = document.querySelector(".next"); //右按钮

// //2 规定一下当前的位置
// var curIndex = 0; 


// //3，右边安按钮点击事件
// rtBtn.onclick = function(){
//     curIndex++;//鼠标点击加1
//     if(curIndex>=len){
//         curIndex = 0;
//     }
// //     list.style.left = -liWidth*curIndex+"px";

// // //处理下标对应
// // for(var i=0; i<pageli.length; i++) {
// //     pageli[i].classList.remove("on");
// // }
// // pageli[curIndex].classList.add("on");
// change(curIndex)
// }





// //4，左边按钮点击事件
// ltBtn.onclick = function(){
//     curIndex--;//鼠标点击-1
//     if(curIndex<=-1){
//         curIndex = len-1;
//     }
//     // list.style.left = -liWidth*curIndex+"px";

//     // for(var i=0; i<pageli.length; i++){
//     //     pageli[i].classList.remove("on");

//     // }
//     // pageli[curIndex].classList.add("on");
//     change(curIndex)
// }

// //5下标点击事件
// for (var i=0; i<pageli.length; i++){
//     pageli[i].setAttribute("data-index",i);
//     pageli[i].onclick = function(){
//         curIndex = this.getAttribute("data-index");
//         // list.style.left = -liWidth*curIndex+"px";

//         // for(var j=0; j<pageli.length; j++){
//         //     pageli[j].classList.remove("on");
    
//         // }
//         // pageli[curIndex].classList.add("on");
        
//         change(curIndex)
//     }
    
// }

// // 切换效果函数
// function change(index){
//     list.style.left = -liWidth*index+"px";

//         for(var j=0; j<pageli.length; j++){
//             pageli[j].classList.remove("on");
    
//         }
//         pageli[index].classList.add("on");
// }

// //自动播放
// var timer = setInterval(function(){
//     rtBtn.onclick();
// },3000);

// //鼠标移入轮播区域的变化
// box.onmouseenter = function(){
//     clearInterval(timer);
// }
// box.onmouseleave = function(){
//     timer = setInterval(function(){
//         rtBtn.onclick();
//     },3000);
    
// }


var curIndex = 0;

ltBtn.onclick = function(){
    curIndex--;
    if (curIndex<=-1){
        curIndex = len-1;
    }
    change(curIndex);

}

rtBtn.onclick = function(){
    curIndex++;
    if (curIndex>=len){
        curIndex = 0;
    }
    change(curIndex);

}


for(var i=0;i<pageli.length;i++){
    pageli[i].setAttribute("data-index",i);
    pageli[i].onclick = function(){
        change(this.getAttribute("data-index"));
    }
}


function change(index){
    for(var i=0;i<listli.length; i++){
        listli[i].classList.remove("on");
    }
    listli[index].classList.add("on")
    for(var j=0; j<pageli.length;j++){
        pageli[j].classList.remove("on");
    }
    pageli[index].classList.add("on")
}

//自动播放
var timer = setInterval(function(){
    rtBtn.onclick();
},3000);

//鼠标移入轮播区域的变化
box.onmouseenter = function(){
    clearInterval(timer);
}
box.onmouseleave = function(){
    timer = setInterval(function(){
        rtBtn.onclick();
    },3000);
    
}


// 内容区图片缩放
var Img = document.querySelector(".m-img");//找到图片
Img.onmouseenter = function(){
    Img.style.width="260px"
    Img.style.height="260px"
    Img.style.transition="0.4s ease";
}
Img.onmouseleave = function(){
    Img.style.width=""
    Img.style.height=""
    Img.style.transition="0.4s ease";
}