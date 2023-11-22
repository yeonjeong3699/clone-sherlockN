//sec02-container
//top
let $topRoller = $(".rolling-top-box");
$topRoller.attr("id", "topOriginal");

let topClone = $topRoller.clone(true);
topClone.attr("id", "topClone");

console.log(topClone)

$(".rolling-top-wrapper").append(topClone);

// $("#topOriginal").css({ "left": "0px" });
// $("#topClone").css({ "left": $topRoller.outerWidth() + 'px' })

$topRoller.addClass("top-original");
topClone.addClass("top-clone");

//bottom
let $bottomRoller = $(".rolling-bottom-box");
$bottomRoller.attr("id", "bottomOriginal");

let bottomClone = $bottomRoller.clone(true);
bottomClone.attr("id", "bottomClone");

$(".rolling-bottom-wrapper").append(bottomClone);

// $("#bottomOriginal").css({ "left": "0px" });
// $("#bottomClone").css({ "left": $bottomRoller.outerWidth() + 'px' })

$bottomRoller.addClass("bottom-original");
bottomClone.addClass("bottom-clone");


//sec03-container
$(".qna > li").each(function () {
    $(this).click(function () {
        if ($(this).children().hasClass("on")) {
            $(this).children().removeClass("on");
        } else {
            $(this).children().addClass("on");
            $(this).siblings().children().removeClass("on");
        }
    })
})