$(function () {

    // $.ajax({

    //     url: "./json/menu.json",
    //     cache: false,
    //     type: "GET",
    //     dataType: "json",
    //     success: function (a) {
    //         $.fn.menu(a)
    //     },
    //     error: function () {
    //         console.log("통신오류")
    //     }
    // })
    // $.ajax({

    //     url: "./json/banner.json",
    //     cache: false,
    //     type: "GET",
    //     dataType: "json",
    //     success: function (b) {
    //         $.fn.mainbanner(b)

    //     },
    //     error: function () {
    //         console.log("통신오류")

    //     }
    // })

    //header 파트
    // var menuleft = $(`<div title=OCN-대한민국No.1채널></div>`).addClass("menuleft")
    // var headerUl = $("<ul></ul>")
    // var headerli = $(`<li><img src="./images/tving_logo.png"></li>`)

    // menuleft.append(headerUl)
    // headerUl.append(headerli)
    // $("#topmenu").append(menuleft)

    // var menuright = $("<div></div>").addClass("menuright")
    // var headerUl2 = $("<ul></ul>").addClass("rightnode")
    // var headerli2 = $(`
    //                 <li>로그인</li>
    //                 <li>티빙 회원가입</li>
    //                 <li>이용권 구매</li>
    //                 <li>프로그램 검색</li>
    //                 `)
    // menuright.append(headerUl2)
    // headerUl2.append(headerli2)
    // $("#topmenu").append(menuright)

    // $(".rightnode li").click(function () {
    //     var node = $(this).index()
    //     $(".rightnode li").val(node)

    //     if (node == 0) {
    //         location.href = "./login.html"
    //     }
    //     else if (node == 1) {
    //         location.href = "./membership.html"
    //     }
    //     else if (node == 2) {
    //         location.href = "./coupon.html"
    //     }
    //     else {

    //     }
    // })

    //해더파트 메뉴 끝


    //상단메뉴 시작

    // $.fn.menu = function (data) {

    //     // console.log(data)
    //     var ocnMenu = $(`<div><img src="./images/ocn_logo.png" class=ocnimg></div>`).addClass("ocnSize")
    //     $("#ocnTop").append(ocnMenu)
    //     var ocnDiv = $("<div></div>").addClass("ocnMenu")
    //     var ocnUl = $("<ul></ul>")

    //     $.each(data, function (a, b) {
    //         var ocnLi = $(`<li class=somenu` + a + `>` + data[a].main_menu + `</li>`)
    //         ocnUl.append(ocnLi)
    //         ocnDiv.append(ocnUl)
    //         $("#ocnTop").append(ocnDiv)
    //     })
    //     $(".ocnimg").click(function () {
    //         location.href = "http://ocn.cjenm.com/ko"
    //     })

    //     // 소메뉴 생성 함수


    //     //첫번째 소메뉴   (ocn 스토리)
    //     var ocnSubOl = $("<ol class=ocnSub1></ol>")

    //     $.each(data[0].menu_list, function (a, b) {
    //         // console.log(a)
    //         var ocnSubLi = $(`<li><a href="` + data[0].menu_link[a] + `">` + data[0].menu_list[a] + `</a></li>`)
    //         ocnSubOl.append(ocnSubLi)
    //     })
    //     $(".somenu0").append(ocnSubOl)

    //     //첫번째 마우스
    //     $(".somenu0").click(function () {
    //         $(".ocnSub1").slideToggle(500)
    //     })
    //     //-----------------------(1)--------------------------//

    //     //두번째 소메뉴  (ocn 편성표)
    //     var ocnSubOl1 = $("<ol class=ocnSub2></ol>")
    //     $.each(data[1].menu_list, function (a, b) {

    //         var ocnSubLi = $(`<li><a href="` + data[1].menu_link[a] + `">` + data[1].menu_list[a] + `</li>`)
    //         ocnSubOl1.append(ocnSubLi)
    //     })
    //     $(".somenu1").append(ocnSubOl1)

    //     //두번째 메뉴 마우스컨트롤
    //     $(".somenu1").click(function () {
    //         $(".ocnSub2").slideToggle(500)
    //     })

    //     //-------------------------(2)------------------------//
    //     //세번째 소메뉴 (동영상)
    //     var ocnSubOl2 = $("<ol class=ocnSub3></ol>")
    //     var ocnSubLiMovie = $(`<li><a href="` + data[2].menu_link + `">` + data[2].menu_list + `</li>`)
    //     ocnSubOl2.append(ocnSubLiMovie)
    //     $(".somenu2").append(ocnSubOl2)

    //     //세번째 메뉴 (마우스)
    //     $(".somenu2").click(function () {
    //         $(".ocnSub3").slideToggle(500)
    //     })
    //     //-------------------------(3)-----------------------//

    //     //네번째 소메뉴 (ocn블록)

    //     var ocnSubOl3 = $("<ol class=ocnSub4></ol>")
    //     $.each(data[3].menu_list, function (a, b) {
    //         var ocnSubLi = $(`<li><a href="` + data[3].menu_link[a] + `">` + data[3].menu_list[a] + `</li>`)
    //         ocnSubOl3.append(ocnSubLi)
    //     })
    //     $(".somenu3").append(ocnSubOl3)

    //     //네번째 메뉴 (마우스)
    //     $(".somenu3").click(function () {
    //         $(".ocnSub4").slideToggle(500)
    //     })

    //     //-------------------------(4)------------------------//
    //     //다섯번째 소메뉴 (ocn오리지널)

    //     var ocnSubOl4 = $("<ol class=ocnSub5></ol>")
    //     $.each(data[4].menu_list, function (a, b) {
    //         var ocnSubLi = $(`<li><a href="` + data[4].menu_link[a] + `">` + data[4].menu_list[a] + `</li>`)
    //         ocnSubOl4.append(ocnSubLi)
    //     })
    //     $(".somenu4").append(ocnSubOl4)

    //     //다섯번째 메뉴 (마우스)
    //     $(".somenu4").click(function () {
    //         $(".ocnSub5").slideToggle(500)
    //     })
    //     //--------------------------(5)-----------------------//

    // }

    // 메인 배너 파트

    // $.fn.mainbanner = function (banner) {
    //     var mainUl = $("<ul></ul>").addClass("mainbanner")
    //     console.log(banner)
    //     $.each(banner.banners, function (a, b) {
    //         console.log(b)
    //         var mainli = $(`<li><a href="` + b[1] + `"><img src=` + b[0] + `></a></li>`)

    //         mainUl.append(mainli)
    //     })
    //     $(".mainview").append(mainUl)
    //     $(".mainview").append(
    //     `<span>
    //          <img src="./banner/leftbtn.png">
    //     </span>
    //     <span>
    //         <img src="./banner/rightbtn.png">
    //     </span>`
    //     )

    //     var ea = $(".mainbanner li").length // 4개
    //     var banner_width = $(".mainbanner li").width();
    //     // console.log(banner_width) 1200
    //     var total_size = banner_width * ea;
    //     // console.log(total_size) 4800



    //     var timer = "";

    //     $(".mainbanner").css({
    //         "width": total_size + "px"
    //     })


    //     $.fn.mainbanner2 = function () {
    //         clearTimeout(timer);
    //         $(".mainbanner").animate({
    //             "left": -banner_width + "px"

    //         }, 2000, function () {
    //             var copy = $(".mainbanner li").eq(0).clone();
    //             //첫번째 노드를 복사 
    //             $(".mainbanner li").eq(0).remove();
    //             //첫번째 노드를 삭제
    //             $(".mainbanner").append(copy);
    //             //첫번째 노드를 붙여넣기
    //             $(".mainbanner").css({
    //                 "left": 0
    //             })
    //         })
    //         timer = setTimeout($.fn.mainbanner2, 3000);
    //     }
    //     timer = setTimeout($.fn.mainbanner2, 3000);
    // }
})