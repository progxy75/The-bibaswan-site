$(document).ready(function() {
    "use strict";
    var e = '<i class="fa fa-angle-down" aria-hidden="true"></i>',
        s = '<span class="rs-menu-parent">' + e + "</span>",
        n = '<div class="sub-menu-close"><i class="fa fa-times" aria-hidden="true"></i>Close</div>';
    $(".nav-menu .rs-mega-menu").append(s), $(".nav-menu > .menu-item-has-children").append(s), $(".nav-menu > .menu-item-has-children .sub-menu > .menu-item-has-children").append(s), $(".nav-menu .menu-item-has-children .sub-menu").append(n), $(".nav-menu .rs-mega-menu .mega-menu").append(n), $("span.rs-menu-parent").on("click", function(s) {
        s.preventDefault();
        var n = $(this),
            i = n.siblings("ul"),
            a = n.parent("li"),
            l = a.siblings("li");
        if (i.hasClass("sub-menu")) i = n.siblings("ul.sub-menu");
        else if (i.hasClass("mega-menu")) i = n.siblings("ul.mega-menu");
        i.hasClass("visible") ? (setTimeout(function() {
            i.removeClass("visible")
        }, 10), n.html(e)) : (setTimeout(function() {
            i.addClass("visible")
        }, 10), n.html('<i class="fa fa-angle-up" aria-hidden="true"></i>')), a.find("ul.visible").removeClass("visible"), a.siblings("li").children("ul").removeClass("visible"), l.find("ul.visible").removeClass("visible"), a.children("ul").find("span.rs-menu-parent").html(e), l.children("span.rs-menu-parent").html(e), l.find("span.rs-menu-parent").html(e)
    }), $("ul.nav-menu div.sub-menu-close").on("click", function(s) {
        s.preventDefault();
        var n = $(this).parent("ul");
        n.removeClass("visible"), n.siblings("span.rs-menu-parent").html(e)
    }), $("a.rs-menu-toggle").on("click", function(e) {
        e.preventDefault();
        var s = $(".rs-menu ul").height();
        $(this).hasClass("rs-menu-toggle-open") ? ($(this).removeClass("rs-menu-toggle-open").addClass("rs-menu-toggle-close"), $(".rs-menu").animate({
            height: "0px"
        }, {
            queue: !1,
            duration: 300
        }).addClass("rs-menu-close")) : ($(this).removeClass("rs-menu-toggle-close").addClass("rs-menu-toggle-open"), $(".rs-menu").animate({
            height: s
        }, {
            queue: !1,
            duration: 300
        }).removeClass("rs-menu-close"))
    });
    var i = 0;
    $(window).on("load", function() {
        i = $(window).width(), $(".rs-menu").addClass("rs-menu-close")
    }), $(window).resize(function() {
        i !== $(window).width() && ($(".visible").removeClass("visible"), $(".rs-menu-toggle").removeClass("rs-menu-toggle-open").addClass("rs-menu-toggle-close"), $(".rs-menu").css("height", "0").addClass("rs-menu-close"), $("span.rs-menu-parent").html(e), i = $(window).width())
    })
});