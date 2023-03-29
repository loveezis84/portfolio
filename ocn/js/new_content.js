$(function () {
    console.log("test")
    var blackImg = [
        "mini1-black.png",
        "mini2-black.png",
        "mini3-black.png",
        "mini4-black.png",
        "mini5-black.png",]

    // var colorImg = [
    //     "mini1-color.png",
    //     "mini2-color.png",
    //     "mini3-color.png",
    //     "mini4-color.png",
    //     "mini5-color.png"
    // ]


    var contentDiv = $("<div class=contenttop></div>")
    var contentSpan = $("<span>New Contents</span>")
    var contentSpan2 = $("<span></span>")
    contentDiv.append(contentSpan,contentSpan2)
    $(".newContents").append(contentDiv)



    var ea = colorImg.length
    console.log(ea)
    var w = 0; 
    var contentUl1 = $("<ul class=contentcss></ul>")
    var contentLi1;

    while(w < ea){
            contentLi1 = $(
                `<li><img src="./contents/` + blackImg[f] + `"></li>`)
       
            contentUl1.append(contentLi1)
            w++
    }
    $(".newContents").append(contentUl1)


    // f = 0;
    // var contentUl2 = $("<ul class=contentcss2></ul>")
    // var contentLi2;
    // while (f < ea) {
    //         contentLi2 = $(
    //             `<li><img src="./contents/` + blackImg[f] + `"></li>`)
          
    //         contentUl2.append(contentLi2)
    //         f++
    //     }
    // $(".newContents").append(contentUl2)

    // $(".contentcss > li").click(function(){
    //     console.log("test")
    // })   
})