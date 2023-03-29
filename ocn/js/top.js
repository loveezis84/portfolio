  $(function(){
  
  //header 파트
  var menuleft = $(`<div title=OCN-대한민국No.1채널></div>`).addClass("menuleft")
  var headerUl = $("<ul></ul>")
  var headerli = $(`<li><img src="./images/tving_logo.png"></li>`)

  menuleft.append(headerUl)
  headerUl.append(headerli)
  $("#topmenu").append(menuleft)

  var menuright = $("<div></div>").addClass("menuright")
  var headerUl2 = $("<ul></ul>").addClass("rightnode")
  var headerli2 = $(`
                  <li>로그인</li>
                  <li>티빙 회원가입</li>
                  <li>이용권 구매</li>
                  <li>프로그램 검색</li>
                  `)
  menuright.append(headerUl2)
  headerUl2.append(headerli2)
  $("#topmenu").append(menuright)

  $(".rightnode li").click(function () {
      var node = $(this).index()
      $(".rightnode li").val(node)

      if (node == 0) {
          location.href = "./login.html"
      }
      else if (node == 1) {
          location.href = "./membership.html"
      }
      else if (node == 2) {
          location.href = "./coupon.html"
      }
      else {

      }
  })

  //해더파트 메뉴 끝

})