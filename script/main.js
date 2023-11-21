//sec03-container
$(".qna > li").each(function(){
    $(this).click(function(){
        if($(this).children().hasClass("on")){
            $(this).children().removeClass("on");
        }else{
            $(this).children().addClass("on");
            $(this).siblings().children().removeClass("on");
        }
    })
})