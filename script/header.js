$(window).scroll(function () {
    if (window.scrollY > 0) {
        $(".header-container").css({
            "position": "fixed",
            "borderBottom": "solid 1px #e1e1e1",
            "boxShadow": "0px 2px 8px rgba(0, 0, 0, 0.1)",
            "backgroundColor": "white",
            "zIndex": "999"
        })
    }else{
        $(".header-container").css({
            "position": "",
            "borderBottom": "",
            "boxShadow": "",
            "backgroundColor": "",
            "zIndex": ""
        })
    }
})