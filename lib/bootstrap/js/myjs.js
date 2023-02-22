(function (doc,win) {
    var doc = doc.documentElement /*获取去根元素*/
    doc.addEventListener('DOMContentLoaded',Resize,false)
    win.addEventListener('resize',Resize,false)
    function Resize() {
        // 改变根元素字体大小
        doc.style.fontSize = doc.clientWidth/1366*10+'px'
    }
})(document,window)
// 匿名函数自执行
