! function(e) {
    "use strict";
    var a = e(".menu-sticky"),
        n = e(window);
    n.on("scroll", function() {
        n.scrollTop() < 300 ? a.removeClass("sticky") : a.addClass("sticky")
    }), e(".latest-news-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        fade: !1,
        asNavFor: ".latest-news-nav"
    }), e(".latest-news-nav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".latest-news-slider",
        dots: !1,
        centerMode: !1,
        centerPadding: "0",
        focusOnSelect: !0
    }), e(window).on("load", function() {
        e(window).width() < 992 && (e(".rs-menu").css("height", "0"), e(".rs-menu").css("opacity", "0"), e(".rs-menu-toggle").on("click", function() {
            e(".rs-menu").css("opacity", "1")
        }))
    });
    var o = e("#home-slider");

    function t(a, n) {
        a.each(function() {
            var a = e(this),
                o = "animated " + a.data("animation-" + n);
            a.addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                a.removeClass(o)
            })
        })
    }(o.owlCarousel({
        loop: !0,
        margin: 0,
        navSpeed: 800,
        nav: !0,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: 1,
        autoplay: !0,
        transitionStyle: "fade"
    }), o.on("change.owl.carousel", function(a) {
        t(e(".owl-item", o).eq(a.item.index).find("[data-animation-out]"), "out")
    }), o.on("changed.owl.carousel", function(a) {
        t(e(".owl-item", o).eq(a.item.index).find("[data-animation-in]"), "in")
    }), e(".rs-carousel").each(function() {
        var a = e(this),
            n = a.data("loop"),
            o = a.data("items"),
            t = a.data("margin"),
            i = (a.data("stage-padding"), a.data("autoplay")),
            l = a.data("autoplay-timeout"),
            s = a.data("smart-speed"),
            d = a.data("dots"),
            c = a.data("nav"),
            r = a.data("nav-speed"),
            g = a.data("mobile-device"),
            m = a.data("mobile-device-nav"),
            u = a.data("mobile-device-dots"),
            p = a.data("ipad-device"),
            v = a.data("ipad-device-nav"),
            f = a.data("ipad-device-dots"),
            h = a.data("md-device"),
            w = a.data("md-device-nav"),
            y = a.data("md-device-dots");
        a.owlCarousel({
            loop: !!n,
            items: o || 4,
            lazyLoad: !0,
            margin: t || 0,
            autoplay: !!i,
            autoplayTimeout: l || 1e3,
            smartSpeed: s || 250,
            dots: !!d,
            nav: !!c,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            navSpeed: !!r,
            responsiveClass: !0,
            responsive: {
                0: {
                    items: g || 1,
                    nav: !!m,
                    dots: !!u
                },
                768: {
                    items: p || 3,
                    nav: !!v,
                    dots: !!f
                },
                992: {
                    items: h || 4,
                    nav: !!w,
                    dots: !!y
                }
            }
        })
    }), e(".player").length && e(".player").YTPlayer(), e(".collapse.show").prev(".card-header").addClass("active"), e("#accordion, #bs-collapse, #accordion1").on("show.bs.collapse", function(a) {
        e(a.target).prev(".card-header").addClass("active")
    }).on("hide.bs.collapse", function(a) {
        e(a.target).prev(".card-header").removeClass("active")
    }), (new WOW).init(), e(".grid").length && e(".grid").imagesLoaded(function() {
        e(".gridFilter").on("click", "button", function() {
            var n = e(this).attr("data-filter");
            a.isotope({
                filter: n
            })
        });
        var a = e(".grid").isotope({
            itemSelector: ".grid-item",
            percentPosition: !0,
            masonry: {
                columnWidth: ".grid-item"
            }
        })
    }), e(".gridFilter button").length) && (e(".gridFilter button").length && e(".gridFilter button").on("click", function(a) {
        e(this).siblings(".active").removeClass("active"), e(this).addClass("active"), a.preventDefault()
    }));
    e(".image-popup").length && e(".image-popup").magnificPopup({
        type: "image",
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure animated zoomInDown")
            }
        },
        gallery: {
            enabled: !0
        }
    }), e(".popup-youtube").length && e(".popup-youtube").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }), e(".single-product").length && e(".single-product").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        asNavFor: ".single-product-nav"
    }), e(".single-product-nav").length && e(".single-product-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".single-product",
        dots: !1,
        focusOnSelect: !0,
        centerMode: !0
    }), e(window).on("load", function() {
        e(".book_preload").delay(2e3).fadeOut(200), e(".book").on("click", function() {
            e(".book_preload").fadeOut(200)
        })
    }), e(".counter-number").length && e(".counter-number").counterUp({
        delay: 20,
        time: 1500
    });
    var i = e("#scrollUp");
    if (i.length && (n.on("scroll", function() {
            n.scrollTop() > 150 ? i.fadeIn() : i.fadeOut()
        }), i.on("click", function() {
            e("html,body").animate({
                scrollTop: 0
            }, 500)
        })), e("#googleMap").length) {
        google.maps.event.addDomListener(window, "load", function() {
            var e = {
                    zoom: 10,
                    scrollwheel: !1,
                    center: new google.maps.LatLng(40.837936, -73.412551),
                    styles: [{
                        stylers: [{
                            saturation: -100
                        }]
                    }]
                },
                a = new google.maps.Map(document.getElementById("googleMap"), e);
            new google.maps.Marker({
                position: a.getCenter(),
                animation: google.maps.Animation.BOUNCE,
                icon: "images/map-marker.png",
                map: a
            })
        })
    }
    e(".toggle-btn").length && e(".toggle-btn").on("click", function() {
        e(this).toggleClass("active"), e("body").toggleClass("hidden-menu")
    }), e("#nav-expander").length && e("#nav-expander").on("click", function(a) {
        a.preventDefault(), e("body").toggleClass("nav-expanded")
    }), e("#nav-close").length && e("#nav-close").on("click", function(a) {
        a.preventDefault(), e("body").removeClass("nav-expanded")
    }), e(".sidebarnav_menu").length && e(".sidebarnav_menu li.menu-item-has-children").on("click", function() {
        e(this).children("ul").slideToggle("slow", function() {})
    })
}(jQuery);