var message="**This page is no longer active**";function rtclickcheck(keyp){return"Netscape"==navigator.appName&&3==keyp.which?(alert(message),!1):-1!=navigator.appVersion.indexOf("MSIE")&&2==event.button?(alert(message),!1):void 0}document.onmousedown=rtclickcheck,jQuery(document).ready((function($){$(document).keydown((function(event){var pressedKey=String.fromCharCode(event.keyCode).toLowerCase();if(event.ctrlKey&&("c"==pressedKey||"u"==pressedKey))return!1}))})),document.onkeypress=function(event){if(123==(event=event||window.event).keyCode)return!1},document.onmousedown=function(event){if(123==(event=event||window.event).keyCode)return!1},document.onkeydown=function(event){if(123==(event=event||window.event).keyCode)return!1},$((function(){$(this).bind("contextmenu",(function(e){e.preventDefault()}))})),$(document).bind("keydown",(function(e){if(e.ctrlKey&&83==e.which)return e.preventDefault(),!1})),function($){"use strict";function loader(){$(window).on("load",(function(){$("#ventix-preloader").addClass("loaded"),$("#loading").fadeOut(500),$("#ventix-preloader").hasClass("loaded")&&$("#preloader").delay(900).queue((function(){$(this).remove()}))}))}$(document).ready((function(){valid_section_transition(),$('[data-toggle="tooltip"]').tooltip(),$(".player").mb_YTPlayer(),$(".animate").scrolla(),$("#gallery-masonary,.blog-masonry").imagesLoaded((function(){$(".mix-item-menu").on("click","button",(function(){var filterValue=$(this).attr("data-filter");$grid.isotope({filter:filterValue})})),$(".mix-item-menu button").on("click",(function(event){$(this).siblings(".active").removeClass("active"),$(this).addClass("active"),event.preventDefault()}));var $grid=$("#gallery-masonary").isotope({itemSelector:".gallery-item",percentPosition:!0,masonry:{columnWidth:".gallery-item"}});$(".blog-masonry").isotope({itemSelector:".blog-item",percentPosition:!0,masonry:{columnWidth:".blog-item"}})})),$(".timer").countTo(),$(".fun-fact").appear((function(){$(".timer").countTo()}),{accY:-100});var t1=new TimelineMax({paused:!0});function valid_section_transition(){var section=jQuery(".section-item"),allLi=jQuery(".nav-side .nav-item"),button=jQuery(".smooth-menu"),wrapper=jQuery(".main-wrapper"),enter=wrapper.data("enter"),exit=wrapper.data("exit");button.on("click",(function(){var element=jQuery(this),href=element.attr("href"),sectionID=jQuery(href),parent=element.closest(".nav-side .nav-item");parent.hasClass("active")||(allLi.removeClass("active"),wrapper.find(section).removeClass("animated "+enter),wrapper.hasClass("opened")&&wrapper.find(section).addClass("animated "+exit),parent.addClass("active"),wrapper.addClass("opened"),wrapper.find(sectionID).removeClass("animated "+exit).addClass("animated "+enter),jQuery(section).addClass("hidden"),jQuery(sectionID).removeClass("hidden").addClass("active"))}))}t1.to(".nav-side",1,{width:"45%",ease:Expo.easeInOut}),t1.staggerTo(".nav-item > a",.6,{top:"0px",ease:Expo.easeInOut},.1,"-=0.8"),t1.staggerTo(".nav-item a.dropdown-toggle",.6,{top:"5px",ease:Expo.easeInOut},.1,"-=0.6"),t1.reverse(),$(document).on("click",".nav-toggle",(function(){t1.reversed(!t1.reversed())})),$(document).on("click",".nav-item .smooth-menu",(function(){t1.reversed(!t1.reversed())}));const testimonialCarousel=new Swiper(".testimonial-carousel",{direction:"horizontal",loop:!0,autoplay:!0}),brand5col=new Swiper(".brand5col",{loop:!0,slidesPerView:2,spaceBetween:30,autoplay:!1,breakpoints:{768:{slidesPerView:3,spaceBetween:40},992:{slidesPerView:4,spaceBetween:60},1199:{slidesPerView:5,spaceBetween:90}}}),bannerStyleOne=new Swiper(".services-style-two-carousel",{direction:"horizontal",loop:!0,autoplay:!0,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".services-button-next",prevEl:".services-button-prev"}});$(".contact-form").each((function(){var formInstance;$(this).submit((function(){var action=$(this).attr("action");return $("#message").slideUp(750,(function(){$("#message").hide(),$("#submit").after('<img src="assets/img/ajax-loader.gif" class="loader" />').attr("disabled","disabled"),$.post(action,{name:$("#name").val(),email:$("#email").val(),phone:$("#phone").val(),comments:$("#comments").val()},(function(data){document.getElementById("message").innerHTML=data,$("#message").slideDown("slow"),$(".contact-form img.loader").fadeOut("slow",(function(){$(this).remove()})),$("#submit").removeAttr("disabled")}))})),!1}))}))})),loader()}(jQuery);