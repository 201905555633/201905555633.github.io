window.onload=function(){
    var imgArr=[
        {"path":"img/a1.jpg"},
        {"path":"img/a2.jpg"},
        {"path":"img/a3.jpeg"},
        {"path":"img/a4.jpeg"},
        {"path":"img/a5.jpg"},
        {"path":"img/a6.jpg"},
        {"path":"img/10.jpeg"}
    ];
    var size=[
        {"top":-25,"left":40,"width":800,"height":350,"zIndex":1,"opacity":0},
        {"top":-25,"left":40,"width":800,"height":350,"zIndex":2,"opacity":40},
        {"top":-25,"left":40,"width":800,"height":350,"zIndex":3,"opacity":70},
        {"top":-25,"left":40,"width":800,"height":350,"zIndex":4,"opacity":100},
        {"top":-25,"left":40,"width":800,"height":350,"zIndex":3,"opacity":70},
        {"top":-25,"left":40,"width":800,"height":350,"zIndex":2,"opacity":40},
        {"top":-25,"left":40,"width":800,"height":350,"zIndex":1,"opacity":0}
    ];
    var imgSum=imgArr.length;
    var wrap=document.getElementById('wrap');
    var cont=wrap.firstElementChild || wrap.firstChild;
    var btnArr=wrap.getElementsByTagName('a');
    var falg=true;
    var speed=7000;
    wrap.onmouseover=function(){
        for (var i=0;i<btnArr.length;i++) {
            btnArr[i].style.display='block';
        }
        clearInterval(wrap.timer);
    }
    wrap.onmouseout=function(){
        for (var i=0;i<btnArr.length;i++) {
            btnArr[i].style.display='none';
        }
        wrap.timer=setInterval(function(){
             move(true);
         },speed);
    }
    for (var i=0;i<imgSum;i++) {
        var lis=document.createElement('li');             
        // lis.style.cssText='top:'+size[i].top+'px;'+'left:'+size[i].left+'px;'+'width:'+size[i].width+'px;'+'z-index:'+size[i].zIndex+';'+'height:'
        // +size[i].height+'px;'+'opacity:'+size[i].opacity+';';
        lis.style.backgroundImage='url('+imgArr[i].path+')';
        cont.appendChild(lis);
    }
    var liArr=cont.children;
    move();
    wrap.timer=setInterval(function(){
        move(true);
    },speed);
    btnArr[1].onclick=function(){
        if (falg) {
            move(true);
        }
    }
    btnArr[0].onclick=function(){
        if (falg) {
            move(false);
        }
    }
    function move(bool){
        if(bool!=undefined){
            if(bool){
                size.unshift(size.pop());
            }else {
                size.push(size.shift());
            }
        }
        for (var i=0;i<liArr.length;i++) {
            animate(liArr[i],size[i],function(){
                falg=true;
            });
        }
    }
}