$("#content").load('./首页.html')
/* 加载首页 */
$(function(){
    $('#nav').find('.shop-index').on('click',function(){
        $("#content").load('./首页.html')
    })
})

//立即执行函数
$(function(){	
    //获取src值
   $("#nav>li li").on("click",function(e){
       e.preventDefault()
       $(this).addClass("active").siblings().removeClass('active')
       //得到点击的li的文本
       let title_name = $(this).text()
       for (let i = 0; i < data_src.length; i++) {
           if (data_src[i].name == title_name) {
               //获取当前点击地址
               var address = data_src[i].src
               //加载页面
               $("#content").load(address)
           }  
       }  
   });
   // 设置一下代码是根据窗口高度在设置content的高度$(window).height() ;
//    var content_height = $(document).height()-90
//    // console.log(content_height);
//    $("#content").css("height",content_height);
});

/* 左边导航伸缩效果 */
$('#nav').find('span').on('click',function(){
   /* 点击当前的span标签改变父元素li的宽度 */

   $('.boult').css({transform:'rotate(0)'})
   $(this).parents('#nav').find('li').removeClass('active')
   $(this).parents('#nav').find('.boult').css({color:'#a5acb3'}).prev().css({color:'#a5acb3'})
   $(this).children().css({color:'white'})

   /* 获取span的相邻的同级标签ul，下面的所有孩子的长度+1 */
   let num = ($(this).next().children().length+1)*60 + 'px'
   /* 获取span标签的父亲li */
   let ul_fa = $(this).parent()
   /* 判断条件 */
   if (ul_fa.css('height')=='60px') {
       /* 将当前的父亲高度增加，其他的兄弟宽度恢复到60px */
       ul_fa.css({height:num}).siblings().css({height:'60px'})
       /* 让向上按钮向下旋转 */
       $(this).children().css({color:'white'}).last().css({transform:'rotate(180deg)'})
   }else{
       /* 点击打开的父亲li，又恢复到60px */
       $(this).parent().css({height:'60px'})
       $(this).children().css({color:'white'}).last().css({transform:'rotate(0)'})
   }
})

/* 点击头像 退出游戏 */
$('#log_out_fa').on('mouseover',function(){
    $('#log_out').css({display:'block'})
})
$('#log_out_fa').on('mouseout',function(){
    $('#log_out').css({display:'none'})
})
$('#log_out').on('click',function(){
    location.href = './登录.html'
    sessionStorage.clear()
})